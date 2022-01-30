import {
  QueryAllManagersToRolesArgs,
  Query_AllManagersToRolesMetaArgs,
  Resolvers,
  MutationCreateManagersToRoleArgs,
  MutationUpdateManagersToRoleArgs,
  MutationRemoveManagersToRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ManagersToRole: (_, {id}, {context}: {context: Context}) =>
      context.service('managersToRoles').get(id),
    allManagersToRoles: (_, params: QueryAllManagersToRolesArgs, {context}: {context: Context}) =>
      context.service('managersToRoles').all(params),
    _allManagersToRolesMeta: (_, params: Query_AllManagersToRolesMetaArgs, {context}: {context: Context}) =>
      context.service('managersToRoles').meta(params),
  },
  Mutation: {
    createManagersToRole: (_, params: MutationCreateManagersToRoleArgs, {context}: {context: Context}) =>
      context.service('managersToRoles').create(params, true),
    updateManagersToRole: (_, params: MutationUpdateManagersToRoleArgs, {context}: {context: Context}) =>
      context.service('managersToRoles').update(params, true),
    removeManagersToRole: (_, params: MutationRemoveManagersToRoleArgs, {context}: {context: Context}) =>
      context.service('managersToRoles').delete(params),
  },
};

export default queryResolvers;
