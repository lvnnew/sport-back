import {Context} from '../../types';
import {StrictUpdateAuditLogArgs, StrictCreateAuditLogArgs} from '../AuditLogsService';

type Data = {createData: StrictCreateAuditLogArgs, updateData: StrictUpdateAuditLogArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
