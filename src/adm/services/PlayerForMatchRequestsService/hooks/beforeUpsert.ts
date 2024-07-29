import {Context} from '../../types';
import {
  StrictUpdatePlayerForMatchRequestArgs,
  StrictCreatePlayerForMatchRequestArgs,
  ReliablePlayerForMatchRequestCreateUserInput,
} from '../PlayerForMatchRequestsService';

type InputData = {
  createData: ReliablePlayerForMatchRequestCreateUserInput,
  updateData: StrictUpdatePlayerForMatchRequestArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerForMatchRequestArgs,
  updateData: StrictUpdatePlayerForMatchRequestArgs,
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
