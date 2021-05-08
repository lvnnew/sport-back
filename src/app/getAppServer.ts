import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graph/typeDefs';
import resolvers from './graph/resolvers';
import {AgrContext} from '../agr/services/context';

const getAppServer = (context: AgrContext) => new ApolloServer({
  context: ({req}) => ({
    user: req.user,
    user2: 123,
  }),
  dataSources: () => ({
    ...(context as any),
  }),
  engine: {
    reportSchema: false,
  },
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
});

export default getAppServer;

