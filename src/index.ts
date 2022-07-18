import exitHook from 'exit-hook';
import {ApolloServer, AuthenticationError} from 'apollo-server-express';
import {
  ApolloServerPlugin,
  GraphQLRequestContext,
  GraphQLRequestContextDidResolveOperation,
} from 'apollo-server-plugin-base';
import {
  SelectionNode,
} from 'graphql';
import log from './log';
import schema from './graph/schema';
import {
  createContext,
  createUsersAwareContext,
} from './adm/services/context';
import {Context} from './adm/services/types';
import express, {RequestHandler} from 'express';
import cors from 'cors';
import passport from 'passport';
import {json, raw} from 'body-parser';
import restRouter from './rest/restRouter';
import helmet from 'helmet';
import {collectDefaultMetrics, register} from 'prom-client';
import {initAppPassport} from './app/config/passport';
import {initAdmPassport} from './adm/config/passport';
import appAuthRouter from './app/authRouter';
import admAuthRouter from './adm/authRouter';
import getAppServer from './app/getAppServer';
import {graphqlUploadExpress} from 'graphql-upload';
import {flattenGraphqlToPermission} from './adm/graph/permissionsToGraphql';
import defaultContainer from './adm/services/defaultContainer';
import healthRouter from './rest/healthRouter';
import expressPlayground from 'graphql-playground-middleware-express';

// DO NOT EDIT! THIS IS GENERATED FILE

exitHook(async () => {
  createContext().then(ctx => ctx.close());
});

const app = express();

initAppPassport();
initAdmPassport();

const production = process.env.NODE_ENV === 'production';
log.info(`production: ${production}`);

app.use(cors());
app.use(raw({limit: '50mb'}) as RequestHandler);
app.use(json({limit: '1mb'}) as RequestHandler);
app.use(
  helmet(
    {
      contentSecurityPolicy: production ? undefined : false,
      crossOriginEmbedderPolicy: production ? undefined : false,
    },
  ) as RequestHandler,
);
app.use(passport.initialize() as RequestHandler);

app.use('/app/rest', appAuthRouter);
app.use('/adm/rest', admAuthRouter);

collectDefaultMetrics();

app.get('/metrics', async (_req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error: any) {
    res.status(500).end(error);
  }
});

app.use('/rest', restRouter);

app.use('/health', healthRouter);

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (_arg: any) => {};

const start = async () => {
  const context = await createContext(defaultContainer);

  app.use('/app/graph', passport.authenticate('appJwt', {session: false}));
  app.use('/app/graph', graphqlUploadExpress({maxFiles: 10, maxFileSize: 50 * 1024 * 1024}) as RequestHandler);

  const appServer = getAppServer();
  await appServer.start();
  appServer.applyMiddleware({app, path: '/app/graph'});

  const authPlugin: ApolloServerPlugin = {
    requestDidStart: async (requestContext: GraphQLRequestContext<{context: Context}>) => {
      const {
        context: {context},

        // request: {
        //   variables: requestVariables,
        // },
      } = requestContext;

      // log.info('requestVariables');
      // log.info(requestVariables);

      return {
        didResolveOperation: async (
          resolutionContext: GraphQLRequestContextDidResolveOperation<{context: Context}>,
        ) => {
          // const {getManagerId} = context;

          resolutionContext.operation.selectionSet.selections.forEach((selection: SelectionNode) => {
            if (selection.kind === 'Field') {
              const {name: {value: operationName}} = selection;
              noop(operationName);
              noop(typeof context);
              // noop(getManagerId);
              noop(flattenGraphqlToPermission);
              noop(AuthenticationError);

              // log.info(typeof getManagerId);
              // log.info(getManagerId());

              // log.info(getManagerPermissions());

              // log.info(Object.keys(context));

              // log.info(operationName);
              // log.info(`operationName: ${operationName}`);

              // const permission = flattenGraphqlToPermission[operationName];
              // log.info(`permission: ${permission}`);
              // log.info(`allActionSources: ${flattenGraphqlToPermission.allActionSources}`);

              // log.info(typeof AuthenticationError);

              // if (!permission) {
              //   throw new AuthenticationError(`There is no permission for "${operationName}"`);
              // }

              // if (!getManagerPermissions().includes(permission)) {
              //   throw new AuthenticationError(`Operation "${operationName}" not permitted`);
              // }

              // log.info(selection);
            } else {
              throw new Error('Not expected');
            }
          });
        },
      };
    },
  };

  const server = new ApolloServer({
    context: async ({req}) => ({
      context: await createUsersAwareContext(
        {
          userId: null,
          managerId: (req.user as any).id,
        },
        defaultContainer,
      ),
    }),
    introspection: true,
    plugins: [authPlugin as any],
    schema,
  });

  const admGraphPath = '/adm/graph';
  app.use(admGraphPath, passport.authenticate('admJwt', {session: false}));
  app.use(admGraphPath, graphqlUploadExpress({maxFiles: 10, maxFileSize: 50 * 1024 * 1024}) as RequestHandler);
  await server.start();
  server.applyMiddleware({app, path: admGraphPath});

  context.service('stats').updateGauges();

  const port = 3000;
  const graphEndpoint = `http://localhost:${port}${server.graphqlPath}`;

  if (!production) {
    app.get(
      '/playground',
      expressPlayground({
        endpoint: graphEndpoint,
      }),
    );

    log.info(`🚀 GraphQL playground at http://localhost:${port}/playground`);
  }

  app.listen({port}, () => {
    log.info(`🚀 Server ready at ${graphEndpoint}`);
  });
};

try {
  start();
} catch (error: any) {
  log.error(error);
  createContext().then(ctx => ctx.close());
}
