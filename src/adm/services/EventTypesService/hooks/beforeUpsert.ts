import {Context} from '../../types';
import {
  StrictUpdateEventTypeArgs,
  StrictCreateEventTypeArgs,
  ReliableEventTypeCreateUserInput,
} from '../EventTypesService';

type InputData = {
  createData: ReliableEventTypeCreateUserInput,
  updateData: StrictUpdateEventTypeArgs,
};
type ReturnData = {
  createData: StrictCreateEventTypeArgs,
  updateData: StrictUpdateEventTypeArgs,
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
