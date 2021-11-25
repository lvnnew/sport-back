import {ApolloServer} from 'apollo-server-express';
import typeDefs from './graph/typeDefs';
import resolvers from './graph/resolvers';
import {BaseContext, getOrCreateUsersAwareContext} from '../adm/services/context';

// import log from '../log';

const getAppServer = (baseContext: BaseContext) => new ApolloServer({
  context: ({req}) => {
    // log.info(`req.user: ${req.user}`);
    // log.info(`req.user.id: ${(req.user as any).id}`);
    // log.info(req.user);
    // log.info((req.user as any).id);

    return {
      context: getOrCreateUsersAwareContext(
        baseContext,
        {
          userId: (req.user as any).id,
        },
      ),
    };
  },
  introspection: true,
  resolvers,
  typeDefs,
});

export default getAppServer;

