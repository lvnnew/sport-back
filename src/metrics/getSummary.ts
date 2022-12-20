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
import getAppEnvPrefix from '../config/getAppEnvPrefix';

const summaries: Map<name, Summary> = new Map();

const getSummary = async (name: string) => {
  if (!summaries.has(name)) {
    const prefix = await getAppEnvPrefix();
    summaries.set(name, new Summary({
      name: `${prefix}_graph_${name}`,
      help: `graph_${name}`,
    // maxAgeSeconds: 600,
    // ageBuckets: 5,
    }));
  }

  return summaries.get(name) as Summary<string>;
};

export default getSummary;
