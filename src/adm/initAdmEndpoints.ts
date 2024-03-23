import log from '../log';
import {Express, RequestHandler} from 'express';
import {initAdmPassport} from './config/passport';
import {graphqlUploadExpress} from 'graphql-upload';
import expressPlayground from 'graphql-playground-middleware-express';
import getAdmServer from './getAdmServer';
import {Context} from './services/types';
import passport from 'passport';
import ManagerLoginType from '../types/ManagerLoginType';
import {getConfig} from '../config';
import {Strategy, ExtractJwt, VerifiedCallback, SecretOrKeyProvider} from 'passport-jwt';
import jwksRsa from 'jwks-rsa';
import https from 'https';

// https://www.npmjs.com/package/keycloak-connect
// https://github.com/keycloak/keycloak-quickstarts/tree/latest/nodejs/resource-server
// https://www.keycloak.org/docs/latest/securing_apps/index.html#_nodejs_adapter

const initAdmEndpoints = async (
  app: Express,
  ctx: Context,
  port: number,
  production: boolean,
) => {
  log.info('initAdmEndpoints');

  const endpoints: string[] = [];

  initAdmPassport();

  const {
    oidcAdmJwksUri,
    oidcAdmIssuer,
    oidcAdmJwksRejectUnauthorized,
  } = await getConfig();

  log.info(`
  oidcAdmJwksUri: ${oidcAdmJwksUri}
  oidcAdmIssuer: ${oidcAdmIssuer}
  `);

  if (!oidcAdmJwksUri || !oidcAdmIssuer) {
    throw new Error('Oidc credentials not provided');
  }

  const admServer = getAdmServer();

  const verify = async (payload: any, done: VerifiedCallback) => {
    log.info('verify payload');
    log.info(JSON.stringify(payload, null, 1));

    log.info('authMiddleware. req keys');

    // const payload = (req as any).kauth.grant.access_token.content;
    const login = payload.sub;
    const email = payload.email;
    const emailVerified = payload.email_verified.toString().toLowerCase() === 'true';
    const firstName = payload.given_name;
    const lastName = payload.family_name;
    const roles = payload?.realm_access?.roles ?? payload?.roles ?? [];

    log.info('payload');
    log.info(JSON.stringify(payload, null, 1));

    log.info(`
    login: ${login}
    email: ${email}
    emailVerified: ${emailVerified}
    login: ${login}
    firstName: ${firstName}
    lastName: ${lastName}
    roles: ${roles.join(', ')}
    `);

    const managerLogin: {id: number} | null = await ctx.prisma.managerLogin.findFirst({
      where: {
        login,
        managerLoginTypeId: ManagerLoginType.Oidc,
      },
    });

    log.info('managerLogin');
    log.info(JSON.stringify(managerLogin/* , null, 1*/));

    try {
      const {manager} = await ctx.service('profile').getOrCreateManagerWithLoginByOidcLogin(
        {
          login,
          email,
          emailVerified,
          firstName,
          lastName,
        },
      );

      // eslint-disable-next-line require-atomic-updates
      const user = {
        id: manager.id,
        login,
        permissions: await ctx.service('profile').getPermissionsOfManager(manager.id),
        roles: await ctx.service('profile').getRolesOfManager(manager.id),
      };

      return done(null, user);
    } catch (error: any) {
      log.error(error);

      return done(error, false);
    }
  };

  passport.use(
    'jwt',
    new Strategy({
      // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: oidcAdmJwksUri,
        handleSigningKeyError: (err, cb) => {
          log.error(err);
          log.error(JSON.stringify(err, null, 1));

          return cb(err);
        },
        requestAgent: oidcAdmJwksUri.startsWith('https') ? new https.Agent({
          rejectUnauthorized: oidcAdmJwksRejectUnauthorized,
        }) : undefined,
      }) as SecretOrKeyProvider,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      issuer: oidcAdmIssuer,
      ignoreExpiration: true,
    },
    verify,
    ),
  );

  const admGraphPath = '/adm/graph';

  app.use(admGraphPath, passport.initialize());
  app.use(admGraphPath, passport.authenticate('jwt', {session: false}));

  app.use(admGraphPath, graphqlUploadExpress({maxFiles: 10, maxFileSize: 50 * 1024 * 1024}) as RequestHandler);

  await admServer.start();

  admServer.applyMiddleware({app, path: admGraphPath});

  ctx.service('stats').updateGauges();

  const graphEndpoint = `http://localhost:${port}${admServer.graphqlPath}`;

  endpoints.push(graphEndpoint);

  if (!production) {
    app.get(
      '/playground',
      expressPlayground({
        endpoint: graphEndpoint,
      }),
    );

    endpoints.push(`http://localhost:${port}/playground`);
  }

  return endpoints;
};

export default initAdmEndpoints;
