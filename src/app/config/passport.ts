/* eslint-disable sort-keys-fix/sort-keys-fix */
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwtSecret from './jwtConfig';
import {Strategy as JWTstrategy, ExtractJwt} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import {log} from '../../log';
import {BCRYPT_SALT_ROUNDS} from '../../constants';
import {getAgrContext} from '../../agr/services/context';
import generator from 'generate-password';
import dayjs from 'dayjs';

passport.use(
  'appRegister',
  new LocalStrategy(
    {
      usernameField: 'firstname',
      passwordField: 'password',
      passReqToCallback: true,
      session: false,
    },
    async (req, _, password, done) => {
      try {
        const ctx = await getAgrContext();
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        const member = await ctx.members.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          newMember: true,
          birthDay: req.body.birthDay,
          memberTypeId: MemberType.Individual,
          enrolDate: new Date(),
          registrationSourceId: RegistrationSource.Web,
        });
        await ctx.prisma.memberAggregate.update({
          where: {id: member.id},
          data: {statusId: MemberStatus.Active},
        });
        await ctx.sendingEmails.sendEmailOnNewRegistration(member.id, password);
        log.info();
        await ctx.appLogins.create({
          login: member.id.toString(),
          passwordHash: hashedPassword,
          memberId: member.id,
        });
        log.info('user created');

        return done(null, {id: member.id});
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

passport.use(
  'appTransferFromOldSystem',
  new LocalStrategy(
    {
      usernameField: 'cardNumber',
      passwordField: 'cardNumber',
      passReqToCallback: true,
      session: false,
    },
    async (req, cardNumber, _, done) => {
      try {
        log.info(`cardNumber: ${cardNumber}`);

        // const preparedCardNumber = prepareCardNumber(cardNumber);
        // log.info(`preparedCardNumber: ${preparedCardNumber}`);
        const ctx = await getAgrContext();

        // Check member with such id exists
        const member = await ctx.members.get(Number.parseInt(cardNumber, 10));
        if (!member) {
          return done(new Error(`There is no member with "${cardNumber}" cardNumber`), null);
        }
        if (member.lastname.toUpperCase() !== req.body.lastname.toUpperCase()) {
          return done(new Error(`Lastname does not match. Expected: "${member.lastname}", got: "${req.body.lastname}"`), null);
        }
        if (dayjs(member.birthDay).diff(dayjs(req.body.birthDay), 'day') > 1) {
          return done(new Error(`BirthDay does not match. Expected: "${member.birthDay}", got: "${req.body.birthDay}"`), null);
        }

        // Check there is no yet login for this member
        const login = await ctx.appLogins.findOne({filter: {memberId: member.id}});
        if (login) {
          return done(new Error(`There is already login for member with "${cardNumber}" cardNumber`), null);
        }

        const password = generator.generate({
          length: 10,
          numbers: true,
        });
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        await ctx.sendingEmails.sendEmailOnTransitionFromOldSystem(member.id, password);
        log.info();
        await ctx.appLogins.create({
          login: member.id.toString(),
          passwordHash: hashedPassword,
          memberId: member.id,
        });
        log.info('user created');

        return done(null, {id: member.id});
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

passport.use(
  'appRestorePassword',
  new LocalStrategy(
    {
      usernameField: 'cardNumber',
      passwordField: 'cardNumber',
      passReqToCallback: true,
      session: false,
    },
    async (_, cardNumber, __, done) => {
      try {
        log.info(`cardNumber: ${cardNumber}`);

        // const preparedCardNumber = prepareCardNumber(cardNumber);
        // log.info(`preparedCardNumber: ${preparedCardNumber}`);
        const ctx = await getAgrContext();

        // Check member with such id exists
        const member = await ctx.members.get(Number.parseInt(cardNumber, 10));
        if (!member) {
          return done(new Error(`There is no member with "${cardNumber}" cardNumber`), null);
        }

        // Check there is no yet login for this member
        const login = await ctx.appLogins.findOne({filter: {memberId: member.id}});
        if (!login) {
          return done(new Error(`There is no login for member with "${cardNumber}" cardNumber`), null);
        }

        const password = generator.generate({
          length: 10,
          numbers: true,
        });
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        log.info();
        await ctx.appLogins.update({
          id: login.id,
          login: member.id.toString(),
          passwordHash: hashedPassword,
          memberId: member.id,
        });
        await ctx.sendingEmails.sendEmailOnRestorePassword(member.id, password);
        log.info('password restored');

        return done(null, {id: member.id});
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

passport.use(
  'appLogin',
  new LocalStrategy(
    {
      usernameField: 'cardNumber',
      passwordField: 'password',
      session: false,
    },
    async (cardNumber, password, done) => {
      try {
        log.info(`cardNumber: ${cardNumber}`);

        // const preparedCardNumber = prepareCardNumber(cardNumber);
        // log.info(`preparedCardNumber: ${preparedCardNumber}`);
        const ctx = await getAgrContext();
        const login = await ctx.appLogins.findOne({filter: {memberId: Number.parseInt(cardNumber, 10)}});

        if (!login) {
          return done(null, false, {message: 'bad cardNumber'});
        }

        const passwordMatch = await bcrypt.compare(password, login.passwordHash);
        if (passwordMatch !== true) {
          log.info('passwords do not match');

          return done(null, false, {message: 'passwords do not match'});
        }

        log.info('user found & password match');

        return done(null, {id: cardNumber});
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret.secret,
  ignoreExpiration: true,
};

export const initAppPassport = () => passport.use(
  'appJwt',
  new JWTstrategy(opts, async (jwtPayload, done) => {
    try {
      // log.info(jwtPayload);
      if (!jwtPayload.id) {
        log.error('Jwt. There is no id in payload');
        done(null, null);

        return;
      }

      done(null, {id: jwtPayload.id});
    } catch (error) {
      done(error, null);
    }
  }),
);
