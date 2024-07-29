import {
  StrictUpdatePlayerMatchRatingArgs,
} from '../PlayerMatchRatingsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerMatchRatingArgs,
): Promise<StrictUpdatePlayerMatchRatingArgs> => data;
