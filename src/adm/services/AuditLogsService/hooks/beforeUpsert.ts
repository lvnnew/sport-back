import {Context} from '../../types';
import {StrictUpdateAuditLogArgs, StrictCreateAuditLogArgs} from '../AuditLogsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateAuditLogArgs,
  updateData: StrictUpdateAuditLogArgs,
): Promise<{createData: StrictCreateAuditLogArgs, updateData: StrictUpdateAuditLogArgs}> => {
  return {createData, updateData};
};
