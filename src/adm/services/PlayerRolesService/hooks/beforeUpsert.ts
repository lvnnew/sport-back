import {Context} from '../../types';
import {
  StrictUpdatePlayerRoleArgs,
  StrictCreatePlayerRoleArgs,
  ReliablePlayerRoleCreateUserInput,
} from '../PlayerRolesService';

type InputData = {
  createData: ReliablePlayerRoleCreateUserInput,
  updateData: StrictUpdatePlayerRoleArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerRoleArgs,
  updateData: StrictUpdatePlayerRoleArgs,
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
