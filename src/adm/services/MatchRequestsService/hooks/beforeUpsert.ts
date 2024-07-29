import {Context} from '../../types';
import {
  StrictUpdateMatchRequestArgs,
  StrictCreateMatchRequestArgs,
  ReliableMatchRequestCreateUserInput,
} from '../MatchRequestsService';

type InputData = {
  createData: ReliableMatchRequestCreateUserInput,
  updateData: StrictUpdateMatchRequestArgs,
};
type ReturnData = {
  createData: StrictCreateMatchRequestArgs,
  updateData: StrictUpdateMatchRequestArgs,
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
