import {
  QueryAllTeamForPlayersArgs,
  Query_AllTeamForPlayersMetaArgs,
  Resolvers,
  MutationCreateTeamForPlayerArgs,
  MutationUpdateTeamForPlayerArgs,
  MutationRemoveTeamForPlayerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    TeamForPlayer: (_, {id}, {context}: {context: Context}) =>
      context.service('teamForPlayers').get(id, true),
    allTeamForPlayers:
      (_, params: QueryAllTeamForPlayersArgs, {context}: {context: Context}) =>
        context.service('teamForPlayers').all(params, true),
    _allTeamForPlayersMeta:
      (_, params: Query_AllTeamForPlayersMetaArgs, {context}: {context: Context}) =>
        context.service('teamForPlayers').meta(params, true),
  },
  Mutation: {
    createTeamForPlayer:
      (_, params: MutationCreateTeamForPlayerArgs, {context}: {context: Context}) =>
        context.service('teamForPlayers').create(params, true),
    updateTeamForPlayer:
      (_, params: MutationUpdateTeamForPlayerArgs, {context}: {context: Context}) =>
        context.service('teamForPlayers').update(params, true),
    removeTeamForPlayer:
      (_, params: MutationRemoveTeamForPlayerArgs, {context}: {context: Context}) =>
        context.service('teamForPlayers').delete(params, true),
  },
};

export default queryResolvers;
