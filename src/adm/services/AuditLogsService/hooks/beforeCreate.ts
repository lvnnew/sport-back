import {Context} from '../../types';
import {
  ReliableAuditLogCreateUserInput,
  StrictCreateAuditLogArgs,
} from '../AuditLogsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableAuditLogCreateUserInput,
): Promise<StrictCreateAuditLogArgs> => data;
