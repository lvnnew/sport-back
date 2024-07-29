import {Context} from '../../types';
import {
  StrictUpdateMatchStatusArgs,
  StrictCreateMatchStatusArgs,
  ReliableMatchStatusCreateUserInput,
} from '../MatchStatusesService';

type InputData = {
  createData: ReliableMatchStatusCreateUserInput,
  updateData: StrictUpdateMatchStatusArgs,
};
type ReturnData = {
  createData: StrictCreateMatchStatusArgs,
  updateData: StrictUpdateMatchStatusArgs,
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
