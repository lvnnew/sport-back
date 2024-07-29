import {
  QueryAllTeamMatchReportsArgs,
  Query_AllTeamMatchReportsMetaArgs,
  Resolvers,
  MutationCreateTeamMatchReportArgs,
  MutationUpdateTeamMatchReportArgs,
  MutationRemoveTeamMatchReportArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    TeamMatchReport: (_, {id}, {context}: {context: Context}) =>
      context.service('teamMatchReports').get(id, true),
    allTeamMatchReports:
      (_, params: QueryAllTeamMatchReportsArgs, {context}: {context: Context}) =>
        context.service('teamMatchReports').all(params, true),
    _allTeamMatchReportsMeta:
      (_, params: Query_AllTeamMatchReportsMetaArgs, {context}: {context: Context}) =>
        context.service('teamMatchReports').meta(params, true),
  },
  Mutation: {
    createTeamMatchReport:
      (_, params: MutationCreateTeamMatchReportArgs, {context}: {context: Context}) =>
        context.service('teamMatchReports').create(params, true),
    updateTeamMatchReport:
      (_, params: MutationUpdateTeamMatchReportArgs, {context}: {context: Context}) =>
        context.service('teamMatchReports').update(params, true),
    removeTeamMatchReport:
      (_, params: MutationRemoveTeamMatchReportArgs, {context}: {context: Context}) =>
        context.service('teamMatchReports').delete(params, true),
  },
};

export default queryResolvers;
