import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graph/typeDefs';
import resolvers from './graph/resolvers';
import {BaseContext, getOrCreateUserAwareContext} from '../adm/services/context';

const getAppServer = (baseContext: BaseContext) => new ApolloServer({
  context: ({req}) => ({context: getOrCreateUserAwareContext(baseContext, (req.user as any).id)}),
  engine: {
    reportSchema: false,
  },
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
  uploads: false,
});

export default getAppServer;

