import {
  QueryAllManagersToPermissionsArgs,
  Query_AllManagersToPermissionsMetaArgs,
  Resolvers,
  MutationCreateManagersToPermissionArgs,
  MutationUpdateManagersToPermissionArgs,
  MutationRemoveManagersToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ManagersToPermission: (_, {id}, {context}: {context: Context}) =>
      context.service('managersToPermissions').get(id),
    allManagersToPermissions: (_, params: QueryAllManagersToPermissionsArgs, {context}: {context: Context}) =>
      context.service('managersToPermissions').all(params),
    _allManagersToPermissionsMeta: (_, params: Query_AllManagersToPermissionsMetaArgs, {context}: {context: Context}) =>
      context.service('managersToPermissions').meta(params),
  },
  Mutation: {
    createManagersToPermission: (_, params: MutationCreateManagersToPermissionArgs, {context}: {context: Context}) =>
      context.service('managersToPermissions').create(params, true),
    updateManagersToPermission: (_, params: MutationUpdateManagersToPermissionArgs, {context}: {context: Context}) =>
      context.service('managersToPermissions').update(params, true),
    removeManagersToPermission: (_, params: MutationRemoveManagersToPermissionArgs, {context}: {context: Context}) =>
      context.service('managersToPermissions').delete(params),
  },
};

export default queryResolvers;
