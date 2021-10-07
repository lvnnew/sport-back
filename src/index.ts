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
import {log} from './log';
import schema from './graph/schema';
import {
  getOrCreateBaseContext,
  getOrCreateUsersAwareContext,
  getOrCreateContext,
  closeCtx,
  Context,
} from './adm/services/context';
import express, {Request, RequestHandler, Response} from 'express';
import cors from 'cors';
import passport from 'passport';
import {json} from 'body-parser';
import restRouter from './rest/restRouter';
import helmet from 'helmet';
import {collectDefaultMetrics, register} from 'prom-client';
import {initAppPassport} from './app/config/passport';
import {initAdmPassport} from './adm/config/passport';
import appAuthRouter from './app/authRouter';
import admAuthRouter from './adm/authRouter';
import getAppServer from './app/getAppServer';
import {graphqlUploadExpress} from 'graphql-upload';
import './utils/polyfills/BigInt';
import {flattenGraphqlToPermission} from './adm/graph/permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

exitHook(async () => {
  await closeCtx();
});

const app = express();

initAppPassport();
initAdmPassport();

app.use(cors());
app.use(json({limit: '50mb'}) as RequestHandler);
app.use(
  helmet(
    {contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false},
  ) as RequestHandler,
);
app.use(passport.initialize() as RequestHandler);

app.use('/app/rest', appAuthRouter);
app.use('/adm/rest', admAuthRouter);

app.get('/health', (_: Request, res: Response) => {
  res
    .status(200)
    .send({message: 'Ok'});
});

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

const start = async () => {
  const baseContext = await getOrCreateBaseContext();
  const context = await getOrCreateContext();

  app.use('/app/graph', passport.authenticate('appJwt', {session: false}));
  app.use('/app/graph', graphqlUploadExpress({maxFiles: 10, maxFileSize: 50 * 1024 * 1024}) as RequestHandler);

  const appServer = getAppServer(baseContext);
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
          const {getManagerId} = context;

          resolutionContext.operation.selectionSet.selections.forEach((selection: SelectionNode) => {
            if (selection.kind === 'Field') {
              const {name: {value: operationName}} = selection;
              log.info(typeof getManagerId);
              log.info(getManagerId());

              // log.info(getManagerPermissions());

              // log.info(Object.keys(context));

              log.info(operationName);
              log.info(`operationName: ${operationName}`);

              const permission = flattenGraphqlToPermission[operationName];
              log.info(`permission: ${permission}`);
              log.info(`allActionSources: ${flattenGraphqlToPermission.allActionSources}`);

              log.info(typeof AuthenticationError);

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
    context: ({req}) => {
      // log.info('req.user');
      // log.info(req.user);

      return ({
        context: {
          ...getOrCreateUsersAwareContext(
            baseContext,
            {
              managerId: (req.user as any).id,
              managerPermissions: (req.user as any).permissions,
            },
          ),
        },
      });
    },
    introspection: true,
    plugins: [authPlugin as any],
    schema,
  });

  const admGraphPath = '/adm/graph';
  app.use(admGraphPath, passport.authenticate('admJwt', {session: false}));
  app.use(admGraphPath, graphqlUploadExpress({maxFiles: 10, maxFileSize: 50 * 1024 * 1024}) as RequestHandler);
  await server.start();
  server.applyMiddleware({app, path: admGraphPath});

  context.stats.updateGauges();

  const port = 3000;
  app.listen({port}, () => {
    log.info(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
};

try {
  start();
} catch (error: any) {
  log.error(error);
} finally {
  closeCtx();
}
