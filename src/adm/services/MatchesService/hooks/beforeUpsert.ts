import {Context} from '../../types';
import {
  StrictUpdateMatchArgs,
  StrictCreateMatchArgs,
  ReliableMatchCreateUserInput,
} from '../MatchesService';

type InputData = {
  createData: ReliableMatchCreateUserInput,
  updateData: StrictUpdateMatchArgs,
};
type ReturnData = {
  createData: StrictCreateMatchArgs,
  updateData: StrictUpdateMatchArgs,
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
