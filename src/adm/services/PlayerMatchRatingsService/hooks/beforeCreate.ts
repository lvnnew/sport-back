import {Context} from '../../types';
import {
  ReliablePlayerMatchRatingCreateUserInput,
  StrictCreatePlayerMatchRatingArgs,
} from '../PlayerMatchRatingsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerMatchRatingCreateUserInput,
): Promise<StrictCreatePlayerMatchRatingArgs> => data;
