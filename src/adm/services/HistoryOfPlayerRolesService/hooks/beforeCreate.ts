import {Context} from '../../types';
import {
  ReliableHistoryOfPlayerRoleCreateUserInput,
  StrictCreateHistoryOfPlayerRoleArgs,
} from '../HistoryOfPlayerRolesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableHistoryOfPlayerRoleCreateUserInput,
): Promise<StrictCreateHistoryOfPlayerRoleArgs> => data;
