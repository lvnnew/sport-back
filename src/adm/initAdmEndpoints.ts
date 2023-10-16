import log from '../log';
import express, {Express, RequestHandler, Request, Response, NextFunction} from 'express';
import {initAdmPassport} from './config/passport';
import admAuthRouter from './authRouter';
import {graphqlUploadExpress} from 'graphql-upload';
import expressPlayground from 'graphql-playground-middleware-express';
import getAdmServer from './getAdmServer';
import Keycloak, {Token} from 'keycloak-connect';
import {Context} from './services/types';
import passport from 'passport';
import ManagerLoginType from '../types/ManagerLoginType';
import AppError from '../AppError';
import AppErrorCode from '../types/AppErrorCode';
import {getConfig} from '../config';

// https://www.npmjs.com/package/keycloak-connect
// https://github.com/keycloak/keycloak-quickstarts/tree/latest/nodejs/resource-server
// https://www.keycloak.org/docs/latest/securing_apps/index.html#_nodejs_adapter

const guard = (accessToken: Token, req: express.Request, res: express.Response) => {
  log.info('accessToken keys');
  log.info(Object.keys(accessToken));
  // log.info('accessToken');
  // log.info(JSON.stringify(accessToken, null, 1));
  log.info(`roles: ${(accessToken as any).content.realm_access.roles.join(', ')}`);
  log.info(req);
  log.info(res);

  return (accessToken as any).content.realm_access.roles.length;
};

const getAuthMiddleware = (
  ctx: Context,
  keycloak: Keycloak.Keycloak,
) => [
  keycloak.protect(guard),
  async (req: Request, res: Response, next: NextFunction) => {
    log.info('authMiddleware. req keys');
    log.info(Object.keys(req));

    log.info('kauth');
    log.info(JSON.stringify((req as any).kauth, null, 1));

    log.info(`authMiddleware. roles: ${(req as any).kauth.grant.access_token.content.realm_access.roles.join(', ')}`);
    log.info(`authMiddleware. user id (sub): ${(req as any).kauth.grant.access_token.content.sub}`);
    log.info(`authMiddleware. email_verified: ${(req as any).kauth.grant.access_token.content.email_verified}`);
    log.info(`authMiddleware. preferred_username: ${(req as any).kauth.grant.access_token.content.preferred_username}`);
    log.info(`authMiddleware. given_name: ${(req as any).kauth.grant.access_token.content.given_name}`);
    log.info(`authMiddleware. family_name: ${(req as any).kauth.grant.access_token.content.family_name}`);

    const tokenData = (req as any).kauth.grant.access_token.content;
    const login = tokenData.sub;
    const email = tokenData.preferred_username;
    const emailVerified = tokenData.email_verified;
    const firstName = tokenData.given_name;
    const lastName = tokenData.family_name;

    const managerLogin: {id: number} | null = await ctx.prisma.managerLogin.findFirst({
      where: {
        login,
        managerLoginTypeId: ManagerLoginType.Oidc,
      },
    });

    log.info('managerLogin');
    log.info(JSON.stringify(managerLogin, null, 1));

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
      req.user = {
        id: manager.id,
        login,
        permissions: await ctx.service('profile').getPermissionsOfManager(manager.id),
        roles: await ctx.service('profile').getRolesOfManager(manager.id),
      };

      next();
    } catch (error: any) {
      log.error(error);

      if (error instanceof AppError && error.code === AppErrorCode.EmailNotVerified) {
        res.statusCode = 401;
        res.send({
          code: error.code,
          message: error.message,
          details: error.details,
          name: error.name,
        });
      } else {
        res.statusCode = 400;
        res.send({
          message: error.message,
        });
      }

      next(error);
    }

    // Делаем отдельный хендлер, который обрабатывает то что пришло после клоака, сохраняет данные в req.user
    // Пользователя ищем по отделььному необязательному oidcId полю в менеджере
    // Если не нашли и емейл подтвержденный - иещм по имейлу, если нашли - берем его и устанавливаем ему oidcId
    // А нужно ли искать по имейлу? Наверное, да
    // Если не нашли создаем нового
    // Делаем настраиваемую опцию, откуда брать роли - из бд или их токена, делаем эту функцию возможной переопределить
    // Делаем возможным переопределить функцию, определяющую доступные пермишны

    // // eslint-disable-next-line require-atomic-updates
    // req.user = {
    //   id: manager.id,
    //   login,
    //   permissions: await ctx.service('profile').getPermissionsOfManager(manager.id),
    //   roles: await ctx.service('profile').getRolesOfManager(manager.id),
    // };

    // next();
  },
];

const oidcEnabled = true;

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
    // oidcAdmClientId,
    oidcAdmRealm,
    oidcAdmUrl,
  } = await getConfig();

  if (!oidcAdmRealm || !oidcAdmUrl) {
    throw new Error('Oidc credentials not provided');
  }

  const keycloak = new Keycloak({}, {
    // realm: 'prj-dev-admin',
    realm: oidcAdmRealm,
    'bearer-only': true,
    // 'auth-server-url': 'https://kk.stage01.making.ventures',
    'auth-server-url': oidcAdmUrl,
    'ssl-required': 'external',
    resource: 'resource-server',
    'confidential-port': 443,
  });

  if (oidcEnabled) {
    app.use('/adm', keycloak.middleware());
  } else {
    app.use('/adm/rest', admAuthRouter);
  }

  const admServer = getAdmServer();

  const authMiddleware = getAuthMiddleware(ctx, keycloak);

  const admGraphPath = '/adm/graph';
  if (oidcEnabled) {
    app.use(admGraphPath, authMiddleware);
  } else {
    app.use(admGraphPath, passport.authenticate('admJwt', {session: false}));
  }

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
