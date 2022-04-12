import {Context} from '../../types';
import {MutationCreateAuditLogArgsWithAutoDefinable} from '../AuditLogsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAuditLogArgsWithAutoDefinable,
): Promise<MutationCreateAuditLogArgsWithAutoDefinable> => data;
