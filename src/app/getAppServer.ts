import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graph/typeDefs';
import resolvers from './graph/resolvers';
import {createUsersAwareContext} from '../adm/services/context';
import defaultContainer from '../adm/services/defaultContainer';
import {InMemoryLRUCache} from '@apollo/utils.keyvaluecache';

const getAppServer = () => new ApolloServer({
  context: async ({req}) => {
    const context = await createUsersAwareContext(
      {
        userId: (req.user as any).id,
        managerId: null,
        managerLogin: null,
        ip: req.headers['x-forwarded-for'] as string ||
          req.socket.remoteAddress as string ||
          null,
      },
      defaultContainer,
    );
    context.service('profile').setUserId((req.user as any).id);

    return {context};
  },
  introspection: true,
  resolvers,
  typeDefs,
  cache: new InMemoryLRUCache(),
});

export default getAppServer;
