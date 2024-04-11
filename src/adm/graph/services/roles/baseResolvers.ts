import {
  QueryAllRolesArgs,
  Query_AllRolesMetaArgs,
  Resolvers,
  MutationCreateRoleArgs,
  MutationUpdateRoleArgs,
  MutationRemoveRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Role: (_, {id}, {context}: {context: Context}) =>
      context.service('roles').get(id, true),
    allRoles:
      (_, params: QueryAllRolesArgs, {context}: {context: Context}) =>
        context.service('roles').all(params, true),
    _allRolesMeta:
      (_, params: Query_AllRolesMetaArgs, {context}: {context: Context}) =>
        context.service('roles').meta(params, true),
  },
  Mutation: {
    createRole:
      (_, params: MutationCreateRoleArgs, {context}: {context: Context}) =>
        context.service('roles').create(params, true),
    updateRole:
      (_, params: MutationUpdateRoleArgs, {context}: {context: Context}) =>
        context.service('roles').update(params, true),
    removeRole:
      (_, params: MutationRemoveRoleArgs, {context}: {context: Context}) =>
        context.service('roles').delete(params, true),
  },
};

export default queryResolvers;
