import {
  MutationCreateAuditLogArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAuditLogArgs,
): Promise<MutationCreateAuditLogArgs> => data;
