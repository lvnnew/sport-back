/* eslint-disable sort-keys-fix/sort-keys-fix */
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwtSecret from './jwtConfig';
import {Strategy as JWTstrategy, ExtractJwt} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import {log} from '../../log';
import {BCRYPT_SALT_ROUNDS} from '../../constants';
import {getContext} from '../../agr/services/context';

passport.use(
  'admRegister',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false,
    },
    async (_, email, password, done) => {
      try {
        const ctx = await getContext();
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        log.info();
        const login = await ctx.managerLogins.create({
          login: email,
          passwordHash: hashedPassword,
          role: '',
          emailVerified: false,
          initialPasswordChanged: true,
          locked: true,
        });
        log.info('user created');

        return done(null, {id: login.id});
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);

passport.use(
  'admLogin',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (email, password, done) => {
      try {
        log.info(`email: ${email}`);

<<<<<<< HEAD
        const ctx = await getAgrContext();
=======
        const ctx = await getContext();
>>>>>>> 6375169 (gen)
        const loginEntry = await ctx.managerLogins.findOne({filter: {login: email}});

        if (!loginEntry) {
          return done(null, false, {message: 'bad login'});
        }

        const passwordMatch = await bcrypt.compare(password, loginEntry.passwordHash);
        if (passwordMatch !== true) {
          log.info('passwords do not match');

          return done(null, false, {message: 'passwords do not match'});
        }

        log.info('user found & password match');

        return done(null, {id: loginEntry.id});
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

export const initAdmPassport = () => passport.use(
  'admJwt',
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
