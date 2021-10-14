import {
  Resolvers,
  QueryGetPermissionsOfManagerWithMetaArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

const queryResolvers: Resolvers = {
  Query: {
    getPermissions: (_, __, {context}: {context: Context}) =>
      context.profile.getPermissions(),
    getPermissionsWithMeta: (_, __, {context}: {context: Context}) =>
      context.profile.getPermissionsWithMeta(),
    getPermissionsOfManagerWithMeta: (_, params: QueryGetPermissionsOfManagerWithMetaArgs, {context}: {context: Context}) =>
      context.profile.getPermissionsOfManagerWithMeta(params.managerId),
  },
};

export default queryResolvers;
