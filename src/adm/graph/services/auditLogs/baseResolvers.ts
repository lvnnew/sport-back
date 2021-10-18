import {
  QueryAllAuditLogsArgs,
  Query_AllAuditLogsMetaArgs,
  Resolvers,
  MutationCreateAuditLogArgs,
  MutationUpdateAuditLogArgs,
  MutationRemoveAuditLogArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AuditLog: (_, {id}, {context}: {context: Context}) =>
      context.auditLogs.get(id),
    allAuditLogs: (_, params: QueryAllAuditLogsArgs, {context}: {context: Context}) =>
      context.auditLogs.all(params),
    _allAuditLogsMeta: (_, params: Query_AllAuditLogsMetaArgs, {context}: {context: Context}) =>
      context.auditLogs.meta(params),
  },
  Mutation: {
    createAuditLog: (_, params: MutationCreateAuditLogArgs, {context}: {context: Context}) =>
      context.auditLogs.create(params),
    updateAuditLog: (_, params: MutationUpdateAuditLogArgs, {context}: {context: Context}) =>
      context.auditLogs.update(params),
    removeAuditLog: (_, params: MutationRemoveAuditLogArgs, {context}: {context: Context}) =>
      context.auditLogs.delete(params),
  },
};

export default queryResolvers;
