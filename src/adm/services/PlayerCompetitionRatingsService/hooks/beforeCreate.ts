import {Context} from '../../types';
import {
  ReliablePlayerCompetitionRatingCreateUserInput,
  StrictCreatePlayerCompetitionRatingArgs,
} from '../PlayerCompetitionRatingsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerCompetitionRatingCreateUserInput,
): Promise<StrictCreatePlayerCompetitionRatingArgs> => data;
