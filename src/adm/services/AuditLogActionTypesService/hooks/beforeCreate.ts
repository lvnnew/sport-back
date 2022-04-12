import {Context} from '../../types';
import {MutationCreateAuditLogActionTypeArgsWithAutoDefinable} from '../AuditLogActionTypesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAuditLogActionTypeArgsWithAutoDefinable,
): Promise<MutationCreateAuditLogActionTypeArgsWithAutoDefinable> => data;
