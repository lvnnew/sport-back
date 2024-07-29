import {
  QueryAllReportForClubsArgs,
  Query_AllReportForClubsMetaArgs,
  Resolvers,
  MutationCreateReportForClubArgs,
  MutationUpdateReportForClubArgs,
  MutationRemoveReportForClubArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ReportForClub: (_, {id}, {context}: {context: Context}) =>
      context.service('reportForClubs').get(id, true),
    allReportForClubs:
      (_, params: QueryAllReportForClubsArgs, {context}: {context: Context}) =>
        context.service('reportForClubs').all(params, true),
    _allReportForClubsMeta:
      (_, params: Query_AllReportForClubsMetaArgs, {context}: {context: Context}) =>
        context.service('reportForClubs').meta(params, true),
  },
  Mutation: {
    createReportForClub:
      (_, params: MutationCreateReportForClubArgs, {context}: {context: Context}) =>
        context.service('reportForClubs').create(params, true),
    updateReportForClub:
      (_, params: MutationUpdateReportForClubArgs, {context}: {context: Context}) =>
        context.service('reportForClubs').update(params, true),
    removeReportForClub:
      (_, params: MutationRemoveReportForClubArgs, {context}: {context: Context}) =>
        context.service('reportForClubs').delete(params, true),
  },
};

export default queryResolvers;
