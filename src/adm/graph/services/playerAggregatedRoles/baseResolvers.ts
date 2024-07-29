import {
  QueryAllPlayerAggregatedRolesArgs,
  Query_AllPlayerAggregatedRolesMetaArgs,
  Resolvers,
  MutationCreatePlayerAggregatedRoleArgs,
  MutationUpdatePlayerAggregatedRoleArgs,
  MutationRemovePlayerAggregatedRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PlayerAggregatedRole: (_, {id}, {context}: {context: Context}) =>
      context.service('playerAggregatedRoles').get(id, true),
    allPlayerAggregatedRoles:
      (_, params: QueryAllPlayerAggregatedRolesArgs, {context}: {context: Context}) =>
        context.service('playerAggregatedRoles').all(params, true),
    _allPlayerAggregatedRolesMeta:
      (_, params: Query_AllPlayerAggregatedRolesMetaArgs, {context}: {context: Context}) =>
        context.service('playerAggregatedRoles').meta(params, true),
  },
  Mutation: {
    createPlayerAggregatedRole:
      (_, params: MutationCreatePlayerAggregatedRoleArgs, {context}: {context: Context}) =>
        context.service('playerAggregatedRoles').create(params, true),
    updatePlayerAggregatedRole:
      (_, params: MutationUpdatePlayerAggregatedRoleArgs, {context}: {context: Context}) =>
        context.service('playerAggregatedRoles').update(params, true),
    removePlayerAggregatedRole:
      (_, params: MutationRemovePlayerAggregatedRoleArgs, {context}: {context: Context}) =>
        context.service('playerAggregatedRoles').delete(params, true),
  },
};

export default queryResolvers;
