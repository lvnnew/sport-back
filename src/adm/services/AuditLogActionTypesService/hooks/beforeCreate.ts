import {Context} from '../../types';
import {
  ReliableAuditLogActionTypeCreateUserInput,
  StrictCreateAuditLogActionTypeArgs,
} from '../AuditLogActionTypesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableAuditLogActionTypeCreateUserInput,
): Promise<StrictCreateAuditLogActionTypeArgs> => data;
