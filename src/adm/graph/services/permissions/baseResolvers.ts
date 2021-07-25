/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllPermissionsArgs,
  Query_AllPermissionsMetaArgs,
  Resolvers,
  MutationCreatePermissionArgs,
  MutationUpdatePermissionArgs,
  MutationRemovePermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Permission: (_, {id}, {context}: {context: Context}) =>
      context.permissions.get(id),
    allPermissions: (_, params: QueryAllPermissionsArgs, {context}: {context: Context}) =>
      context.permissions.all(params),
    _allPermissionsMeta: (_, params: Query_AllPermissionsMetaArgs, {context}: {context: Context}) =>
      context.permissions.meta(params),
  },
  Mutation: {
    createPermission: (_, params: MutationCreatePermissionArgs, {context}: {context: Context}) =>
      context.permissions.create(params),
    updatePermission: (_, params: MutationUpdatePermissionArgs, {context}: {context: Context}) =>
      context.permissions.update(params),
    removePermission: (_, params: MutationRemovePermissionArgs, {context}: {context: Context}) =>
      context.permissions.delete(params),
  },
};

export default queryResolvers;
