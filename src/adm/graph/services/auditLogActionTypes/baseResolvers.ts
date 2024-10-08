import {
  QueryAllAuditLogActionTypesArgs,
  Query_AllAuditLogActionTypesMetaArgs,
  Resolvers,
  MutationCreateAuditLogActionTypeArgs,
  MutationUpdateAuditLogActionTypeArgs,
  MutationRemoveAuditLogActionTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AuditLogActionType: (_, {id}, {context}: {context: Context}) =>
      context.service('auditLogActionTypes').get(id, true),
    allAuditLogActionTypes:
      (_, params: QueryAllAuditLogActionTypesArgs, {context}: {context: Context}) =>
        context.service('auditLogActionTypes').all(params, true),
    _allAuditLogActionTypesMeta:
      (_, params: Query_AllAuditLogActionTypesMetaArgs, {context}: {context: Context}) =>
        context.service('auditLogActionTypes').meta(params, true),
  },
  Mutation: {
    createAuditLogActionType:
      (_, params: MutationCreateAuditLogActionTypeArgs, {context}: {context: Context}) =>
        context.service('auditLogActionTypes').create(params, true),
    updateAuditLogActionType:
      (_, params: MutationUpdateAuditLogActionTypeArgs, {context}: {context: Context}) =>
        context.service('auditLogActionTypes').update(params, true),
    removeAuditLogActionType:
      (_, params: MutationRemoveAuditLogActionTypeArgs, {context}: {context: Context}) =>
        context.service('auditLogActionTypes').delete(params, true),
  },
};

export default queryResolvers;
