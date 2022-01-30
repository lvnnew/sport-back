import {
  MutationCreateAuditLogActionTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAuditLogActionTypeArgs,
): Promise<MutationCreateAuditLogActionTypeArgs> => data;
