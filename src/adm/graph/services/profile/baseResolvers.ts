import {
  Resolvers,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

const queryResolvers: Resolvers = {
  Query: {
    getPermissions: (_, __, {context}: {context: Context}) =>
      context.profile.getPermissions(),
  },
};

export default queryResolvers;
