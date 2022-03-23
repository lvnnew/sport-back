import {Context} from '../../types';
import {StrictUpdateAuditLogActionTypeArgs, StrictCreateAuditLogActionTypeArgs} from '../AuditLogActionTypesService';

type Data = {createData: StrictCreateAuditLogActionTypeArgs, updateData: StrictUpdateAuditLogActionTypeArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
