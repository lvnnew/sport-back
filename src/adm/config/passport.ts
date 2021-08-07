/* eslint-disable sort-keys-fix/sort-keys-fix */
import bcrypt from 'bcrypt';
import passport from 'passport';
import jwtSecret from './jwtConfig';
import {Strategy as JWTstrategy, ExtractJwt} from 'passport-jwt';
import {Strategy as LocalStrategy} from 'passport-local';
import {log} from '../../log';
import {BCRYPT_SALT_ROUNDS} from '../../constants';
import {getOrCreateContext} from '../services/context';
import R from 'ramda';
import LRUCache from 'lru-cache';

const cache = new LRUCache({
  max: 500,
  maxAge: 1000 * 60 * 60,
});

const getPermissions = async (managerId: number) => {
  log.info(cache.has(managerId));

  if (!cache.has(managerId)) {
    const ctx = await getOrCreateContext();
    const permissionsRaw = await ctx.prisma.managersToRole.findMany({
      where: {
        manageId: managerId,
      },
      include: {
        role: {
          include: {
            rolesToPermissionRoles: {
              select: {
                permissionId: true,
              },
            },
          },
        },
      },
    });

    const permissions = R.uniq(
      R.flatten(
        permissionsRaw.map(managersToRole => managersToRole.role.rolesToPermissionRoles.map(link => link.permissionId)),
      ),
    );

    log.info('permissions');
    log.info(permissions);
    cache.set(managerId, permissions);
  }

  return cache.get(managerId);
};

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
        const ctx = await getOrCreateContext();
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

        const manager = await ctx.managers.create({
          lastName: '',
          firstName: '',
        });

        await ctx.managerLogins.create({
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
          permissions: await getPermissions(manager.id),
        });
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

        const ctx = await getOrCreateContext();
        const login = await ctx.managerLogins.findOne({filter: {login: email}});

        if (!login) {
          return done(null, false, {message: 'bad login'});
        }

        const passwordMatch = await bcrypt.compare(password, login.passwordHash);
        if (passwordMatch !== true) {
          log.info('passwords do not match');

          return done(null, false, {message: 'passwords do not match'});
        }

        log.info('user found & password match');

        return done(null, {
          id: login.managerId,
          permissions: await getPermissions(login.managerId),
        });
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

      done(null, {
        id: jwtPayload.id,
        permissions: await getPermissions(jwtPayload.managerId),
      });
    } catch (error) {
      done(error, null);
    }
  }),
);
