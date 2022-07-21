import {
  Resolvers,
  QueryGetPermissionsOfManagerWithMetaArgs,
  MutationChangePasswordArgs,
  QueryGetRolesOfManagerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

const queryResolvers: Resolvers = {
  Query: {
    getPermissions: (_, __, {context}: {context: Context}) =>
      context.service('profile').getPermissions(),
    getPermissionsWithMeta: (_, __, {context}: {context: Context}) =>
      context.service('profile').getPermissionsWithMeta(),
    getPermissionsOfManagerWithMeta: (_, params: QueryGetPermissionsOfManagerWithMetaArgs, {context}: {context: Context}) =>
      context.service('profile').getPermissionsOfManagerWithMeta(params.managerId),
    getRoles: (_, __, {context}: {context: Context}) =>
      context.service('profile').getRoles(),
    getRolesOfManager: (_, params: QueryGetRolesOfManagerArgs, {context}: {context: Context}) =>
      context.service('profile').getRolesOfManager(params.managerId),
  },
  Mutation: {
    changePassword: (_, params: MutationChangePasswordArgs, {context}: {context: Context}) =>
      context.service('profile').changePassword(params),
  },
};

export default queryResolvers;
