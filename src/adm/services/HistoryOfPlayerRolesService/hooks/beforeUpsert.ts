import {Context} from '../../types';
import {
  StrictUpdateHistoryOfPlayerRoleArgs,
  StrictCreateHistoryOfPlayerRoleArgs,
  ReliableHistoryOfPlayerRoleCreateUserInput,
} from '../HistoryOfPlayerRolesService';

type InputData = {
  createData: ReliableHistoryOfPlayerRoleCreateUserInput,
  updateData: StrictUpdateHistoryOfPlayerRoleArgs,
};
type ReturnData = {
  createData: StrictCreateHistoryOfPlayerRoleArgs,
  updateData: StrictUpdateHistoryOfPlayerRoleArgs,
};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: InputData,
): Promise<ReturnData> => {
  return {
    createData,
    updateData,
  };
};
