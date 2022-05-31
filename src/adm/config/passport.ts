import bcrypt from 'bcrypt';
import passport from 'passport';
import {Strategy as JWTstrategy, ExtractJwt} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import log from '../../log';
import {BCRYPT_SALT_ROUNDS} from '../../constants';
import {createContext} from '../services/context';
import {getConfig} from '../../config';

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
        const ctx = await createContext();
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

        const manager = await ctx.service('managers').create({
          email,
          lastName: '',
          firstName: email,
          active: true,
          headOfUnit: false,
        });

        await ctx.service('managerLogins').create({
          login: email,
          passwordHash: hashedPassword,
          role: '',
          emailVerified: false,
          initialPasswordChanged: true,
          locked: true,
          managerId: manager.id,
        });
        log.info('user created');

        return done(null, {
          id: manager.id,
          permissions: await ctx.service('profile').getPermissionsOfManager(manager.id),
        });
      } catch (error: any) {
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

        const ctx = await createContext();
        const login = await ctx.service('managerLogins').findOne({filter: {login: email}});

        if (!login) {
          return done(null, false, {message: 'bad login'});
        }

        const passwordMatch = await bcrypt.compare(password, login.passwordHash);
        if (passwordMatch !== true) {
          log.info('passwords do not match');

          return done(null, false, {message: 'passwords do not match'});
        }

        log.info('user found & password match');

        const manager = await ctx.service('managers').get(login.managerId);
        if (!manager) {
          return done(null, false, {message: `There is no manager with "${login.managerId}" id`});
        }

        if (!manager.active) {
          return done(null, false, {message: 'There is no manager is not active'});
        }

        return done(null, {
          id: login.managerId,
          fullName: `${manager.firstName} ${manager.lastName}`,
          permissions: await ctx.service('profile').getPermissionsOfManager(login.managerId),
        });
      } catch (error: any) {
        return done(error, null);
      }
    },
  ),
);

export const initAdmPassport = async () => {
  const {admJwtSecret} = await getConfig();
  if (!admJwtSecret) {
    throw new Error('admJwtSecret is not provided');
  }

  return passport.use(
    'admJwt',
    new JWTstrategy(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: admJwtSecret,
        ignoreExpiration: false,
      },
      async (jwtPayload, done) => {
        const ctx = await createContext();

        try {
          if (!jwtPayload.id) {
            log.error('Jwt. There is no id in payload');
            done(null, null);

            return;
          }

          done(null, {
            id: jwtPayload.id,
            permissions: await ctx.service('profile').getPermissionsOfManager(jwtPayload.managerId),
          });
        } catch (error: any) {
          done(error, null);
        }
      },
    ),
  );
};
