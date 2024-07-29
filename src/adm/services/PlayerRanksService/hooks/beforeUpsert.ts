import {Context} from '../../types';
import {
  StrictUpdatePlayerRankArgs,
  StrictCreatePlayerRankArgs,
  ReliablePlayerRankCreateUserInput,
} from '../PlayerRanksService';

type InputData = {
  createData: ReliablePlayerRankCreateUserInput,
  updateData: StrictUpdatePlayerRankArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerRankArgs,
  updateData: StrictUpdatePlayerRankArgs,
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
