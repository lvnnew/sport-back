import {Context} from '../../types';
import {
  StrictUpdatePlayerCompetitionRatingArgs,
  StrictCreatePlayerCompetitionRatingArgs,
  ReliablePlayerCompetitionRatingCreateUserInput,
} from '../PlayerCompetitionRatingsService';

type InputData = {
  createData: ReliablePlayerCompetitionRatingCreateUserInput,
  updateData: StrictUpdatePlayerCompetitionRatingArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerCompetitionRatingArgs,
  updateData: StrictUpdatePlayerCompetitionRatingArgs,
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
