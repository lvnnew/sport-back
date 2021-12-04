import {
  QueryAllRolesToPermissionsArgs,
  Query_AllRolesToPermissionsMetaArgs,
  Resolvers,
  MutationCreateRolesToPermissionArgs,
  MutationUpdateRolesToPermissionArgs,
  MutationRemoveRolesToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    RolesToPermission: (_, {id}, {context}: {context: Context}) =>
      context.rolesToPermissions.get(id),
    allRolesToPermissions: (_, params: QueryAllRolesToPermissionsArgs, {context}: {context: Context}) =>
      context.rolesToPermissions.all(params),
    _allRolesToPermissionsMeta: (_, params: Query_AllRolesToPermissionsMetaArgs, {context}: {context: Context}) =>
      context.rolesToPermissions.meta(params),
  },
  Mutation: {
    createRolesToPermission: (_, params: MutationCreateRolesToPermissionArgs, {context}: {context: Context}) =>
      context.rolesToPermissions.create(params, true),
    updateRolesToPermission: (_, params: MutationUpdateRolesToPermissionArgs, {context}: {context: Context}) =>
      context.rolesToPermissions.update(params, true),
    removeRolesToPermission: (_, params: MutationRemoveRolesToPermissionArgs, {context}: {context: Context}) =>
      context.rolesToPermissions.delete(params),
  },
};

export default queryResolvers;
