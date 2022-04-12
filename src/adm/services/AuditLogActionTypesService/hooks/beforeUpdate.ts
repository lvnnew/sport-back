import {
  StrictUpdateAuditLogActionTypeArgs,
} from '../AuditLogActionTypesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateAuditLogActionTypeArgs,
): Promise<StrictUpdateAuditLogActionTypeArgs> => data;
