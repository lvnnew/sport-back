import {ApolloServer, AuthenticationError} from 'apollo-server-express';
import {
  ApolloServerPlugin,
  GraphQLRequestContext,
  GraphQLRequestContextDidResolveOperation,
  GraphQLRequestContextExecutionDidStart,
} from 'apollo-server-plugin-base';
import {LabelValues, Summary} from 'prom-client';
import {
  SelectionNode,
} from 'graphql';
import schema from '../graph/schema';
import {
  createUsersAwareContext,
} from './services/context';
import {Context} from './services/types';
import {flattenGraphqlToPermission} from './graph/permissionsToGraphql';
import defaultContainer from './services/defaultContainer';
import log from '../log';
import {name} from 'aws-sdk/clients/importexport';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (_arg: any) => {};

const authPlugin: ApolloServerPlugin = {
  requestDidStart: async (requestContext: GraphQLRequestContext<{context: Context}>) => {
    const {
      context: {context},

      // request: {
      //   variables: requestVariables,
      // },
    } = requestContext;

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

            // log.info(getPermissions());

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

            // if (!getPermissions().includes(permission)) {
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

const summaries: Map<name, Summary> = new Map();

const getSummary = (name: string) => {
  if (!summaries.has(name)) {
    summaries.set(name, new Summary({
      name: `graph_${name}`,
      help: `graph_${name}`,
    // maxAgeSeconds: 600,
    // ageBuckets: 5,
    }));
  }

  return summaries.get(name) as Summary<string>;
};

const metricsPlugin: ApolloServerPlugin = {
  requestDidStart: async () => ({
    executionDidStart: async (
      requestContext: GraphQLRequestContextExecutionDidStart<{context: Context}>,
    ) => {
      const {
        operation,
        operationName,
      } = requestContext;

      // const {getManagerId} = context
      noop(requestContext);
      noop(operation);
      noop(operationName);

      // log.info('operation');
      // log.info(JSON.stringify(operation, null, 1));

      log.info('operationName');
      log.info(JSON.stringify(operationName, null, 1));

      // log.info('resolutionContext');
      // log.info(requestContext);

      let endSummary: ((labels?: LabelValues<string>) => number) | null = null;

      if (operationName) {
        const summary = getSummary(operationName);
        endSummary = summary.startTimer();
      }

      return {
        executionDidEnd: async (
          err?: Error,
        ) => {
          // const {getManagerId} = context
          noop(err);

          if (endSummary) {
            endSummary();
          }

          // log.info('resolutionContext');
          // log.info(resolutionContext);

          // return {};
        },
      };
    },
  }),
};

const getAdmServer = () => new ApolloServer({
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
  plugins: [authPlugin, metricsPlugin],
  schema,
});

export default getAdmServer;
