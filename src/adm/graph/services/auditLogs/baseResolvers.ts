import {
  QueryAllAuditLogsArgs,
  Query_AllAuditLogsMetaArgs,
  Resolvers,
  MutationCreateAuditLogArgs,
  MutationUpdateAuditLogArgs,
  MutationRemoveAuditLogArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AuditLog: (_, {id}, {context}: {context: Context}) =>
      context.service('auditLogs').get(id),
    allAuditLogs: (_, params: QueryAllAuditLogsArgs, {context}: {context: Context}) =>
      context.service('auditLogs').all(params),
    _allAuditLogsMeta: (_, params: Query_AllAuditLogsMetaArgs, {context}: {context: Context}) =>
      context.service('auditLogs').meta(params),
  },
  Mutation: {
    createAuditLog: (_, params: MutationCreateAuditLogArgs, {context}: {context: Context}) =>
      context.service('auditLogs').create(params, true),
    updateAuditLog: (_, params: MutationUpdateAuditLogArgs, {context}: {context: Context}) =>
      context.service('auditLogs').update(params, true),
    removeAuditLog: (_, params: MutationRemoveAuditLogArgs, {context}: {context: Context}) =>
      context.service('auditLogs').delete(params),
  },
};

export default queryResolvers;
