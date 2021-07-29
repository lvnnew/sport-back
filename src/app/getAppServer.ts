import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graph/typeDefs';
import resolvers from './graph/resolvers';
import {BaseContext, getOrCreateUsersAwareContext} from '../adm/services/context';

const getAppServer = (baseContext: BaseContext) => new ApolloServer({
  context: ({req}) => ({context: getOrCreateUsersAwareContext(baseContext, (req.user as any).id)}),
  introspection: true,
  resolvers,
  typeDefs,
});

export default getAppServer;

