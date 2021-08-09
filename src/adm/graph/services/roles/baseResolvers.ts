import {
  QueryAllRolesArgs,
  Query_AllRolesMetaArgs,
  Resolvers,
  MutationCreateRoleArgs,
  MutationUpdateRoleArgs,
  MutationRemoveRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Role: (_, {id}, {context}: {context: Context}) =>
      context.roles.get(id),
    allRoles: (_, params: QueryAllRolesArgs, {context}: {context: Context}) =>
      context.roles.all(params),
    _allRolesMeta: (_, params: Query_AllRolesMetaArgs, {context}: {context: Context}) =>
      context.roles.meta(params),
  },
  Mutation: {
    createRole: (_, params: MutationCreateRoleArgs, {context}: {context: Context}) =>
      context.roles.create(params),
    updateRole: (_, params: MutationUpdateRoleArgs, {context}: {context: Context}) =>
      context.roles.update(params),
    removeRole: (_, params: MutationRemoveRoleArgs, {context}: {context: Context}) =>
      context.roles.delete(params),
  },
};

export default queryResolvers;
