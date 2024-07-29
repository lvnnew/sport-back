import {Context} from '../../types';
import {
  StrictUpdateWscContactArgs,
  StrictCreateWscContactArgs,
  ReliableWscContactCreateUserInput,
} from '../WscContactsService';

type InputData = {
  createData: ReliableWscContactCreateUserInput,
  updateData: StrictUpdateWscContactArgs,
};
type ReturnData = {
  createData: StrictCreateWscContactArgs,
  updateData: StrictUpdateWscContactArgs,
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
