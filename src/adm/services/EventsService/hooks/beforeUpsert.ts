import {Context} from '../../types';
import {
  StrictUpdateEventArgs,
  StrictCreateEventArgs,
  ReliableEventCreateUserInput,
} from '../EventsService';

type InputData = {
  createData: ReliableEventCreateUserInput,
  updateData: StrictUpdateEventArgs,
};
type ReturnData = {
  createData: StrictCreateEventArgs,
  updateData: StrictUpdateEventArgs,
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
