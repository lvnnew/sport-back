import bcrypt from 'bcrypt';
import passport from 'passport';
import {Strategy as JWTstrategy, ExtractJwt} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import log from '../../log';
import {BCRYPT_SALT_ROUNDS} from '../../constants';
import {createContext} from '../../adm/services/context';
import generator from 'generate-password';
import {getConfig} from '../../config';

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
        const ctx = await createContext();
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        const user = await ctx.service('users').create({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email,
        });
        await ctx.service('sendingEmails').sendEmailOnNewRegistration(user.id, password);
        await ctx.service('appLogins').create({
          login: user.id.toString(),
          passwordHash: hashedPassword,
          userId: user.id,
        });
        log.info('user created');

        return done(null, {id: user.id});
      } catch (error: any) {
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

        const ctx = await createContext();

        // Check there is no yet login for this user
        const login = await ctx.service('appLogins').findOne({filter: {login: email}});
        if (!login) {
          return done(new Error(`There is no login for user with "${email}" email`), null);
        }

        const password = generator.generate({
          length: 10,
          numbers: true,
        });
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        await ctx.prisma.appLogin.update({
          where: {
            id: login.id,
          },
          data: {
            passwordHash: hashedPassword,
          },
        });
        await ctx.service('sendingEmails').sendEmailOnRestorePassword(login.userId, password);
        log.info('password restored');

        return done(null, {id: login.userId});
      } catch (error: any) {
        return done(error, null);
      }
    },
  ),
);

// const prepareCardNumber = (cardNumber: string) => cardNumber.toString()
//   .replace(/\s/gu, '')
//   .replace(/,/gu, '')
//   .replace(/\./gu, '')
//   .replace(/-/gu, '')
//   .replace(/_/gu, '');

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
        const ctx = await createContext();
        const login = await ctx.service('appLogins').findOne({filter: {login: email}});

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
      } catch (error: any) {
        return done(error, null);
      }
    },
  ),
);

export const initAppPassport = async () => {
  const {appJwtSecret} = await getConfig();
  if (!appJwtSecret) {
    throw new Error('appJwtSecret is not provided');
  }

  return passport.use(
    'appJwt',
    new JWTstrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: appJwtSecret,
        ignoreExpiration: false,
      },
      async (jwtPayload, done) => {
        try {
          // log.info(jwtPayload);
          if (!jwtPayload.id) {
            log.error('Jwt. There is no id in payload');
            done(null, null);

            return;
          }

          done(null, {id: jwtPayload.id});
        } catch (error: any) {
          done(error, null);
        }
      },
    ),
  );
};
