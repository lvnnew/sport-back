import {
  QueryAllTeamsArgs,
  Query_AllTeamsMetaArgs,
  Resolvers,
  MutationCreateTeamArgs,
  MutationUpdateTeamArgs,
  MutationRemoveTeamArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Team: (_, {id}, {context}: {context: Context}) =>
      context.service('teams').get(id, true),
    allTeams:
      (_, params: QueryAllTeamsArgs, {context}: {context: Context}) =>
        context.service('teams').all(params, true),
    _allTeamsMeta:
      (_, params: Query_AllTeamsMetaArgs, {context}: {context: Context}) =>
        context.service('teams').meta(params, true),
  },
  Mutation: {
    createTeam:
      (_, params: MutationCreateTeamArgs, {context}: {context: Context}) =>
        context.service('teams').create(params, true),
    updateTeam:
      (_, params: MutationUpdateTeamArgs, {context}: {context: Context}) =>
        context.service('teams').update(params, true),
    removeTeam:
      (_, params: MutationRemoveTeamArgs, {context}: {context: Context}) =>
        context.service('teams').delete(params, true),
  },
};

export default queryResolvers;
