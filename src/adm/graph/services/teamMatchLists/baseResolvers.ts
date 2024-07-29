import {
  QueryAllTeamMatchListsArgs,
  Query_AllTeamMatchListsMetaArgs,
  Resolvers,
  MutationCreateTeamMatchListArgs,
  MutationUpdateTeamMatchListArgs,
  MutationRemoveTeamMatchListArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    TeamMatchList: (_, {id}, {context}: {context: Context}) =>
      context.service('teamMatchLists').get(id, true),
    allTeamMatchLists:
      (_, params: QueryAllTeamMatchListsArgs, {context}: {context: Context}) =>
        context.service('teamMatchLists').all(params, true),
    _allTeamMatchListsMeta:
      (_, params: Query_AllTeamMatchListsMetaArgs, {context}: {context: Context}) =>
        context.service('teamMatchLists').meta(params, true),
  },
  Mutation: {
    createTeamMatchList:
      (_, params: MutationCreateTeamMatchListArgs, {context}: {context: Context}) =>
        context.service('teamMatchLists').create(params, true),
    updateTeamMatchList:
      (_, params: MutationUpdateTeamMatchListArgs, {context}: {context: Context}) =>
        context.service('teamMatchLists').update(params, true),
    removeTeamMatchList:
      (_, params: MutationRemoveTeamMatchListArgs, {context}: {context: Context}) =>
        context.service('teamMatchLists').delete(params, true),
  },
};

export default queryResolvers;
