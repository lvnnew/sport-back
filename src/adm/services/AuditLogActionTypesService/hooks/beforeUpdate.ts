import {
  MutationUpdateAuditLogActionTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateAuditLogActionTypeArgs,
): Promise<MutationUpdateAuditLogActionTypeArgs> => data;
