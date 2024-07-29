import {
  QueryAllReportForTeamsArgs,
  Query_AllReportForTeamsMetaArgs,
  Resolvers,
  MutationCreateReportForTeamArgs,
  MutationUpdateReportForTeamArgs,
  MutationRemoveReportForTeamArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ReportForTeam: (_, {id}, {context}: {context: Context}) =>
      context.service('reportForTeams').get(id, true),
    allReportForTeams:
      (_, params: QueryAllReportForTeamsArgs, {context}: {context: Context}) =>
        context.service('reportForTeams').all(params, true),
    _allReportForTeamsMeta:
      (_, params: Query_AllReportForTeamsMetaArgs, {context}: {context: Context}) =>
        context.service('reportForTeams').meta(params, true),
  },
  Mutation: {
    createReportForTeam:
      (_, params: MutationCreateReportForTeamArgs, {context}: {context: Context}) =>
        context.service('reportForTeams').create(params, true),
    updateReportForTeam:
      (_, params: MutationUpdateReportForTeamArgs, {context}: {context: Context}) =>
        context.service('reportForTeams').update(params, true),
    removeReportForTeam:
      (_, params: MutationRemoveReportForTeamArgs, {context}: {context: Context}) =>
        context.service('reportForTeams').delete(params, true),
  },
};

export default queryResolvers;
