/* eslint-disable sort-keys-fix/sort-keys-fix */
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwtSecret from './jwtConfig';
import {Strategy as JWTstrategy, ExtractJwt} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import {log} from '../../log';
import {BCRYPT_SALT_ROUNDS} from '../../constants';
import {getOrCreateContext} from '../../adm/services/context';
import generator from 'generate-password';

passport.use(
  'appRegister',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false,
    },
    async (req, email, password, done) => {
      try {
        const ctx = await getOrCreateContext();
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        const user = await ctx.users.create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email,
        });
        await ctx.sendingEmails.sendEmailOnNewRegistration(user.id, password);
        log.info();
        await ctx.appLogins.create({
          login: user.id.toString(),
          passwordHash: hashedPassword,
          userId: user.id,
        });
        log.info('user created');

        return done(null, {id: user.id});
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
      usernameField: 'email',
      passwordField: 'no',
      passReqToCallback: true,
      session: false,
    },
    async (_req, email, __, done) => {
      try {
        log.info(`email: ${email}`);

        const ctx = await getOrCreateContext();

        // Check there is no yet login for this user
        const login = await ctx.appLogins.findOne({filter: {login: email}});
        if (!login) {
          return done(new Error(`There is no login for user with "${email}" email`), null);
        }

        const password = generator.generate({
          length: 10,
          numbers: true,
        });
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        log.info();
        await ctx.prisma.appLogin.update({
          where: {
            id: login.id,
          },
          data: {
            passwordHash: hashedPassword,
          },
        });
        await ctx.sendingEmails.sendEmailOnRestorePassword(login.userId, password);
        log.info('password restored');

        return done(null, {id: login.userId});
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

// const prepareCardNumber = (cardNumber: string) => cardNumber.toString()
//   .replace(/\s/g, '')
//   .replace(/,/g, '')
//   .replace(/\./g, '')
//   .replace(/-/g, '')
//   .replace(/_/g, '');

passport.use(
  'appLogin',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (email, password, done) => {
      try {
        log.info(`email: ${email}`);

        // const preparedCardNumber = prepareCardNumber(cardNumber);
        // log.info(`preparedCardNumber: ${preparedCardNumber}`);
        const ctx = await getOrCreateContext();
        const login = await ctx.appLogins.findOne({filter: {login: email}});

        if (!login) {
          return done(null, false, {message: 'bad cardNumber'});
        }

        const passwordMatch = await bcrypt.compare(password, login.passwordHash);
        if (passwordMatch !== true) {
          log.info('passwords do not match');

          return done(null, false, {message: 'passwords do not match'});
        }

        log.info('user found & password match');

        return done(null, {id: login.userId});
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
