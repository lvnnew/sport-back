import {Context} from '../../../adm/services/types';
import log from '../../../log';

const resolvers = {
  Query: {
    Profile: async (_: any, __: any, ctx: {context: Context; user: any; user2: any}) => {
      log.info(Object.keys(ctx));
      log.info(ctx.user2);
      log.info(ctx.user);
      if (!ctx.user.id) {
        throw new Error('Unauthorised 123');
      }

      const {context} = ctx;
      const user = await context.service('users').get(ctx.user.id);
      if (!user) {
        throw new Error('There is no user with "userId" id');
      }

      return {
        lastname: user.lastname,
        firstname: user.firstname,
        email: user.email,
      };
    },
  },
};

export default resolvers;

