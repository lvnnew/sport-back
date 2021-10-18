import {
  MutationUpdateAuditLogArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateAuditLogArgs,
): Promise<MutationUpdateAuditLogArgs> => data;
