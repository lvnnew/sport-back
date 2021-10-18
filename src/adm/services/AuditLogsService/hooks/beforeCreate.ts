import {
  MutationCreateAuditLogArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateAuditLogArgs,
): Promise<MutationCreateAuditLogArgs> => data;
