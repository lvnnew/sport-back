import {
  StrictUpdatePlayerCompetitionRatingArgs,
} from '../PlayerCompetitionRatingsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerCompetitionRatingArgs,
): Promise<StrictUpdatePlayerCompetitionRatingArgs> => data;
