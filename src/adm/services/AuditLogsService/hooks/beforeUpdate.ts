import {
  MutationUpdateAuditLogArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateAuditLogArgs,
): Promise<MutationUpdateAuditLogArgs> => data;
