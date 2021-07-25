/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllManagersToRolesArgs,
  Query_AllManagersToRolesMetaArgs,
  Resolvers,
  MutationCreateManagersToRoleArgs,
  MutationUpdateManagersToRoleArgs,
  MutationRemoveManagersToRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ManagersToRole: (_, {id}, {context}: {context: Context}) =>
      context.managersToRoles.get(id),
    allManagersToRoles: (_, params: QueryAllManagersToRolesArgs, {context}: {context: Context}) =>
      context.managersToRoles.all(params),
    _allManagersToRolesMeta: (_, params: Query_AllManagersToRolesMetaArgs, {context}: {context: Context}) =>
      context.managersToRoles.meta(params),
  },
  Mutation: {
    createManagersToRole: (_, params: MutationCreateManagersToRoleArgs, {context}: {context: Context}) =>
      context.managersToRoles.create(params),
    updateManagersToRole: (_, params: MutationUpdateManagersToRoleArgs, {context}: {context: Context}) =>
      context.managersToRoles.update(params),
    removeManagersToRole: (_, params: MutationRemoveManagersToRoleArgs, {context}: {context: Context}) =>
      context.managersToRoles.delete(params),
  },
};

export default queryResolvers;
