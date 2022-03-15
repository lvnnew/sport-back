import {Context} from '../../types';
import {StrictUpdateAuditLogActionTypeArgs, StrictCreateAuditLogActionTypeArgs} from '../AuditLogActionTypesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateAuditLogActionTypeArgs,
  updateData: StrictUpdateAuditLogActionTypeArgs,
): Promise<{createData: StrictCreateAuditLogActionTypeArgs, updateData: StrictUpdateAuditLogActionTypeArgs}> => {
  return {createData, updateData};
};
