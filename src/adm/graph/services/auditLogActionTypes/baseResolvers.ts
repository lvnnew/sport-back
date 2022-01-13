import {
  QueryAllAuditLogActionTypesArgs,
  Query_AllAuditLogActionTypesMetaArgs,
  Resolvers,
  MutationCreateAuditLogActionTypeArgs,
  MutationUpdateAuditLogActionTypeArgs,
  MutationRemoveAuditLogActionTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AuditLogActionType: (_, {id}, {context}: {context: Context}) =>
      context.auditLogActionTypes.get(id),
    allAuditLogActionTypes: (_, params: QueryAllAuditLogActionTypesArgs, {context}: {context: Context}) =>
      context.auditLogActionTypes.all(params),
    _allAuditLogActionTypesMeta: (_, params: Query_AllAuditLogActionTypesMetaArgs, {context}: {context: Context}) =>
      context.auditLogActionTypes.meta(params),
  },
  Mutation: {
    createAuditLogActionType: (_, params: MutationCreateAuditLogActionTypeArgs, {context}: {context: Context}) =>
      context.auditLogActionTypes.create(params, true),
    updateAuditLogActionType: (_, params: MutationUpdateAuditLogActionTypeArgs, {context}: {context: Context}) =>
      context.auditLogActionTypes.update(params, true),
    removeAuditLogActionType: (_, params: MutationRemoveAuditLogActionTypeArgs, {context}: {context: Context}) =>
      context.auditLogActionTypes.delete(params),
  },
};

export default queryResolvers;
