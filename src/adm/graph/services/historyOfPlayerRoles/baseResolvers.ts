import {
  QueryAllHistoryOfPlayerRolesArgs,
  Query_AllHistoryOfPlayerRolesMetaArgs,
  Resolvers,
  MutationCreateHistoryOfPlayerRoleArgs,
  MutationUpdateHistoryOfPlayerRoleArgs,
  MutationRemoveHistoryOfPlayerRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    HistoryOfPlayerRole: (_, {id}, {context}: {context: Context}) =>
      context.service('historyOfPlayerRoles').get(id, true),
    allHistoryOfPlayerRoles:
      (_, params: QueryAllHistoryOfPlayerRolesArgs, {context}: {context: Context}) =>
        context.service('historyOfPlayerRoles').all(params, true),
    _allHistoryOfPlayerRolesMeta:
      (_, params: Query_AllHistoryOfPlayerRolesMetaArgs, {context}: {context: Context}) =>
        context.service('historyOfPlayerRoles').meta(params, true),
  },
  Mutation: {
    createHistoryOfPlayerRole:
      (_, params: MutationCreateHistoryOfPlayerRoleArgs, {context}: {context: Context}) =>
        context.service('historyOfPlayerRoles').create(params, true),
    updateHistoryOfPlayerRole:
      (_, params: MutationUpdateHistoryOfPlayerRoleArgs, {context}: {context: Context}) =>
        context.service('historyOfPlayerRoles').update(params, true),
    removeHistoryOfPlayerRole:
      (_, params: MutationRemoveHistoryOfPlayerRoleArgs, {context}: {context: Context}) =>
        context.service('historyOfPlayerRoles').delete(params, true),
  },
};

export default queryResolvers;
