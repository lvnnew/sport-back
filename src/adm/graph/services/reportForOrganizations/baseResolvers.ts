import {
  QueryAllReportForOrganizationsArgs,
  Query_AllReportForOrganizationsMetaArgs,
  Resolvers,
  MutationCreateReportForOrganizationArgs,
  MutationUpdateReportForOrganizationArgs,
  MutationRemoveReportForOrganizationArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ReportForOrganization: (_, {id}, {context}: {context: Context}) =>
      context.service('reportForOrganizations').get(id, true),
    allReportForOrganizations:
      (_, params: QueryAllReportForOrganizationsArgs, {context}: {context: Context}) =>
        context.service('reportForOrganizations').all(params, true),
    _allReportForOrganizationsMeta:
      (_, params: Query_AllReportForOrganizationsMetaArgs, {context}: {context: Context}) =>
        context.service('reportForOrganizations').meta(params, true),
  },
  Mutation: {
    createReportForOrganization:
      (_, params: MutationCreateReportForOrganizationArgs, {context}: {context: Context}) =>
        context.service('reportForOrganizations').create(params, true),
    updateReportForOrganization:
      (_, params: MutationUpdateReportForOrganizationArgs, {context}: {context: Context}) =>
        context.service('reportForOrganizations').update(params, true),
    removeReportForOrganization:
      (_, params: MutationRemoveReportForOrganizationArgs, {context}: {context: Context}) =>
        context.service('reportForOrganizations').delete(params, true),
  },
};

export default queryResolvers;
