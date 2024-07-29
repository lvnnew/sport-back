import {
  StrictUpdateHistoryOfPlayerRoleArgs,
} from '../HistoryOfPlayerRolesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateHistoryOfPlayerRoleArgs,
): Promise<StrictUpdateHistoryOfPlayerRoleArgs> => data;
