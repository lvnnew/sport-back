import {
  QueryAllPlayerForTeamMatchListsArgs,
  Query_AllPlayerForTeamMatchListsMetaArgs,
  Resolvers,
  MutationCreatePlayerForTeamMatchListArgs,
  MutationUpdatePlayerForTeamMatchListArgs,
  MutationRemovePlayerForTeamMatchListArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PlayerForTeamMatchList: (_, {id}, {context}: {context: Context}) =>
      context.service('playerForTeamMatchLists').get(id, true),
    allPlayerForTeamMatchLists:
      (_, params: QueryAllPlayerForTeamMatchListsArgs, {context}: {context: Context}) =>
        context.service('playerForTeamMatchLists').all(params, true),
    _allPlayerForTeamMatchListsMeta:
      (_, params: Query_AllPlayerForTeamMatchListsMetaArgs, {context}: {context: Context}) =>
        context.service('playerForTeamMatchLists').meta(params, true),
  },
  Mutation: {
    createPlayerForTeamMatchList:
      (_, params: MutationCreatePlayerForTeamMatchListArgs, {context}: {context: Context}) =>
        context.service('playerForTeamMatchLists').create(params, true),
    updatePlayerForTeamMatchList:
      (_, params: MutationUpdatePlayerForTeamMatchListArgs, {context}: {context: Context}) =>
        context.service('playerForTeamMatchLists').update(params, true),
    removePlayerForTeamMatchList:
      (_, params: MutationRemovePlayerForTeamMatchListArgs, {context}: {context: Context}) =>
        context.service('playerForTeamMatchLists').delete(params, true),
  },
};

export default queryResolvers;
