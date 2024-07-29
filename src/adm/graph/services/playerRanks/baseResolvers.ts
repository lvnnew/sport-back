import {
  QueryAllPlayerRanksArgs,
  Query_AllPlayerRanksMetaArgs,
  Resolvers,
  MutationCreatePlayerRankArgs,
  MutationUpdatePlayerRankArgs,
  MutationRemovePlayerRankArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PlayerRank: (_, {id}, {context}: {context: Context}) =>
      context.service('playerRanks').get(id, true),
    allPlayerRanks:
      (_, params: QueryAllPlayerRanksArgs, {context}: {context: Context}) =>
        context.service('playerRanks').all(params, true),
    _allPlayerRanksMeta:
      (_, params: Query_AllPlayerRanksMetaArgs, {context}: {context: Context}) =>
        context.service('playerRanks').meta(params, true),
  },
  Mutation: {
    createPlayerRank:
      (_, params: MutationCreatePlayerRankArgs, {context}: {context: Context}) =>
        context.service('playerRanks').create(params, true),
    updatePlayerRank:
      (_, params: MutationUpdatePlayerRankArgs, {context}: {context: Context}) =>
        context.service('playerRanks').update(params, true),
    removePlayerRank:
      (_, params: MutationRemovePlayerRankArgs, {context}: {context: Context}) =>
        context.service('playerRanks').delete(params, true),
  },
};

export default queryResolvers;
