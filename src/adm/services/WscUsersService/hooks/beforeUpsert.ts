import {Context} from '../../types';
import {
  StrictUpdateWscUserArgs,
  StrictCreateWscUserArgs,
  ReliableWscUserCreateUserInput,
} from '../WscUsersService';

type InputData = {
  createData: ReliableWscUserCreateUserInput,
  updateData: StrictUpdateWscUserArgs,
};
type ReturnData = {
  createData: StrictCreateWscUserArgs,
  updateData: StrictUpdateWscUserArgs,
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
