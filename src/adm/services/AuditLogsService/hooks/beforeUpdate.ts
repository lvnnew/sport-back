import {
  StrictUpdateAuditLogArgs,
} from '../AuditLogsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateAuditLogArgs,
): Promise<StrictUpdateAuditLogArgs> => data;
