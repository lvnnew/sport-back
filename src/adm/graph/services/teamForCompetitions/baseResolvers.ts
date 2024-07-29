import {
  QueryAllTeamForCompetitionsArgs,
  Query_AllTeamForCompetitionsMetaArgs,
  Resolvers,
  MutationCreateTeamForCompetitionArgs,
  MutationUpdateTeamForCompetitionArgs,
  MutationRemoveTeamForCompetitionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    TeamForCompetition: (_, {id}, {context}: {context: Context}) =>
      context.service('teamForCompetitions').get(id, true),
    allTeamForCompetitions:
      (_, params: QueryAllTeamForCompetitionsArgs, {context}: {context: Context}) =>
        context.service('teamForCompetitions').all(params, true),
    _allTeamForCompetitionsMeta:
      (_, params: Query_AllTeamForCompetitionsMetaArgs, {context}: {context: Context}) =>
        context.service('teamForCompetitions').meta(params, true),
  },
  Mutation: {
    createTeamForCompetition:
      (_, params: MutationCreateTeamForCompetitionArgs, {context}: {context: Context}) =>
        context.service('teamForCompetitions').create(params, true),
    updateTeamForCompetition:
      (_, params: MutationUpdateTeamForCompetitionArgs, {context}: {context: Context}) =>
        context.service('teamForCompetitions').update(params, true),
    removeTeamForCompetition:
      (_, params: MutationRemoveTeamForCompetitionArgs, {context}: {context: Context}) =>
        context.service('teamForCompetitions').delete(params, true),
  },
};

export default queryResolvers;
