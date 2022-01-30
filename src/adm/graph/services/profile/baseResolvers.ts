import {
  Resolvers,
  QueryGetPermissionsOfManagerWithMetaArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

const queryResolvers: Resolvers = {
  Query: {
    getManagerPermissions: (_, __, {context}: {context: Context}) =>
      context.service('profile').getManagerPermissions(),
    getPermissionsWithMeta: (_, __, {context}: {context: Context}) =>
      context.service('profile').getPermissionsWithMeta(),
    getPermissionsOfManagerWithMeta: (_, params: QueryGetPermissionsOfManagerWithMetaArgs, {context}: {context: Context}) =>
      context.service('profile').getPermissionsOfManagerWithMeta(params.managerId),
  },
};

export default queryResolvers;
