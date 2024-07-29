import {
  QueryAllPlayerForCompetitionTeamsArgs,
  Query_AllPlayerForCompetitionTeamsMetaArgs,
  Resolvers,
  MutationCreatePlayerForCompetitionTeamArgs,
  MutationUpdatePlayerForCompetitionTeamArgs,
  MutationRemovePlayerForCompetitionTeamArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PlayerForCompetitionTeam: (_, {id}, {context}: {context: Context}) =>
      context.service('playerForCompetitionTeams').get(id, true),
    allPlayerForCompetitionTeams:
      (_, params: QueryAllPlayerForCompetitionTeamsArgs, {context}: {context: Context}) =>
        context.service('playerForCompetitionTeams').all(params, true),
    _allPlayerForCompetitionTeamsMeta:
      (_, params: Query_AllPlayerForCompetitionTeamsMetaArgs, {context}: {context: Context}) =>
        context.service('playerForCompetitionTeams').meta(params, true),
  },
  Mutation: {
    createPlayerForCompetitionTeam:
      (_, params: MutationCreatePlayerForCompetitionTeamArgs, {context}: {context: Context}) =>
        context.service('playerForCompetitionTeams').create(params, true),
    updatePlayerForCompetitionTeam:
      (_, params: MutationUpdatePlayerForCompetitionTeamArgs, {context}: {context: Context}) =>
        context.service('playerForCompetitionTeams').update(params, true),
    removePlayerForCompetitionTeam:
      (_, params: MutationRemovePlayerForCompetitionTeamArgs, {context}: {context: Context}) =>
        context.service('playerForCompetitionTeams').delete(params, true),
  },
};

export default queryResolvers;
