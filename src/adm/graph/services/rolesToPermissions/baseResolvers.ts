import {
  QueryAllRolesToPermissionsArgs,
  Query_AllRolesToPermissionsMetaArgs,
  Resolvers,
  MutationCreateRolesToPermissionArgs,
  MutationUpdateRolesToPermissionArgs,
  MutationRemoveRolesToPermissionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    RolesToPermission: (_, {id}, {context}: {context: Context}) =>
      context.service('rolesToPermissions').get(id, true),
    allRolesToPermissions:
      (_, params: QueryAllRolesToPermissionsArgs, {context}: {context: Context}) =>
        context.service('rolesToPermissions').all(params, true),
    _allRolesToPermissionsMeta:
      (_, params: Query_AllRolesToPermissionsMetaArgs, {context}: {context: Context}) =>
        context.service('rolesToPermissions').meta(params, true),
  },
  Mutation: {
    createRolesToPermission:
      (_, params: MutationCreateRolesToPermissionArgs, {context}: {context: Context}) =>
        context.service('rolesToPermissions').create(params, true),
    updateRolesToPermission:
      (_, params: MutationUpdateRolesToPermissionArgs, {context}: {context: Context}) =>
        context.service('rolesToPermissions').update(params, true),
    removeRolesToPermission:
      (_, params: MutationRemoveRolesToPermissionArgs, {context}: {context: Context}) =>
        context.service('rolesToPermissions').delete(params, true),
  },
};

export default queryResolvers;
