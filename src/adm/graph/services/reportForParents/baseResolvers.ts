import {
  QueryAllReportForParentsArgs,
  Query_AllReportForParentsMetaArgs,
  Resolvers,
  MutationCreateReportForParentArgs,
  MutationUpdateReportForParentArgs,
  MutationRemoveReportForParentArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ReportForParent: (_, {id}, {context}: {context: Context}) =>
      context.service('reportForParents').get(id, true),
    allReportForParents:
      (_, params: QueryAllReportForParentsArgs, {context}: {context: Context}) =>
        context.service('reportForParents').all(params, true),
    _allReportForParentsMeta:
      (_, params: Query_AllReportForParentsMetaArgs, {context}: {context: Context}) =>
        context.service('reportForParents').meta(params, true),
  },
  Mutation: {
    createReportForParent:
      (_, params: MutationCreateReportForParentArgs, {context}: {context: Context}) =>
        context.service('reportForParents').create(params, true),
    updateReportForParent:
      (_, params: MutationUpdateReportForParentArgs, {context}: {context: Context}) =>
        context.service('reportForParents').update(params, true),
    removeReportForParent:
      (_, params: MutationRemoveReportForParentArgs, {context}: {context: Context}) =>
        context.service('reportForParents').delete(params, true),
  },
};

export default queryResolvers;
