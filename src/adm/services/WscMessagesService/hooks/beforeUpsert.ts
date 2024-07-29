import {Context} from '../../types';
import {
  StrictUpdateWscMessageArgs,
  StrictCreateWscMessageArgs,
  ReliableWscMessageCreateUserInput,
} from '../WscMessagesService';

type InputData = {
  createData: ReliableWscMessageCreateUserInput,
  updateData: StrictUpdateWscMessageArgs,
};
type ReturnData = {
  createData: StrictCreateWscMessageArgs,
  updateData: StrictUpdateWscMessageArgs,
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
