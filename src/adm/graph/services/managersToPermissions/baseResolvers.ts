import {
  QueryAllManagersToPermissionsArgs,
  Query_AllManagersToPermissionsMetaArgs,
  Resolvers,
  MutationCreateManagersToPermissionArgs,
  MutationUpdateManagersToPermissionArgs,
  MutationRemoveManagersToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ManagersToPermission: (_, {id}, {context}: {context: Context}) =>
      context.managersToPermissions.get(id),
    allManagersToPermissions: (_, params: QueryAllManagersToPermissionsArgs, {context}: {context: Context}) =>
      context.managersToPermissions.all(params),
    _allManagersToPermissionsMeta: (_, params: Query_AllManagersToPermissionsMetaArgs, {context}: {context: Context}) =>
      context.managersToPermissions.meta(params),
  },
  Mutation: {
    createManagersToPermission: (_, params: MutationCreateManagersToPermissionArgs, {context}: {context: Context}) =>
      context.managersToPermissions.create(params),
    updateManagersToPermission: (_, params: MutationUpdateManagersToPermissionArgs, {context}: {context: Context}) =>
      context.managersToPermissions.update(params),
    removeManagersToPermission: (_, params: MutationRemoveManagersToPermissionArgs, {context}: {context: Context}) =>
      context.managersToPermissions.delete(params),
  },
};

export default queryResolvers;
