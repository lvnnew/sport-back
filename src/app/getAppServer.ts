import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graph/typeDefs';
import resolvers from './graph/resolvers';
import {сreateUsersAwareContext} from '../adm/services/context';
import defaultContainer from '../adm/services/defaultContainer';

const getAppServer = () => new ApolloServer({
  context: async ({req}) => {
    const context = await сreateUsersAwareContext(
      {
        userId: (req.user as any).id,
        managerId: null,
      },
      defaultContainer,
    );
    context.service('profile').setUserId((req.user as any).id);

    return {context};
  },
  introspection: true,
  resolvers,
  typeDefs,
});

export default getAppServer;
