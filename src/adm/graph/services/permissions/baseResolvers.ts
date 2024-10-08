import {
  QueryAllPermissionsArgs,
  Query_AllPermissionsMetaArgs,
  Resolvers,
  MutationCreatePermissionArgs,
  MutationUpdatePermissionArgs,
  MutationRemovePermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Permission: (_, {id}, {context}: {context: Context}) =>
      context.service('permissions').get(id, true),
    allPermissions:
      (_, params: QueryAllPermissionsArgs, {context}: {context: Context}) =>
        context.service('permissions').all(params, true),
    _allPermissionsMeta:
      (_, params: Query_AllPermissionsMetaArgs, {context}: {context: Context}) =>
        context.service('permissions').meta(params, true),
  },
  Mutation: {
    createPermission:
      (_, params: MutationCreatePermissionArgs, {context}: {context: Context}) =>
        context.service('permissions').create(params, true),
    updatePermission:
      (_, params: MutationUpdatePermissionArgs, {context}: {context: Context}) =>
        context.service('permissions').update(params, true),
    removePermission:
      (_, params: MutationRemovePermissionArgs, {context}: {context: Context}) =>
        context.service('permissions').delete(params, true),
  },
};

export default queryResolvers;
