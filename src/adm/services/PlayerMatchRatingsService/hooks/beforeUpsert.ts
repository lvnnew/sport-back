import {Context} from '../../types';
import {
  StrictUpdatePlayerMatchRatingArgs,
  StrictCreatePlayerMatchRatingArgs,
  ReliablePlayerMatchRatingCreateUserInput,
} from '../PlayerMatchRatingsService';

type InputData = {
  createData: ReliablePlayerMatchRatingCreateUserInput,
  updateData: StrictUpdatePlayerMatchRatingArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerMatchRatingArgs,
  updateData: StrictUpdatePlayerMatchRatingArgs,
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
