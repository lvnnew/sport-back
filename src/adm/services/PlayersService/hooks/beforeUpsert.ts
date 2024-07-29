import {Context} from '../../types';
import {
  StrictUpdatePlayerArgs,
  StrictCreatePlayerArgs,
  ReliablePlayerCreateUserInput,
} from '../PlayersService';

type InputData = {
  createData: ReliablePlayerCreateUserInput,
  updateData: StrictUpdatePlayerArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerArgs,
  updateData: StrictUpdatePlayerArgs,
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
