import {Context} from '../../types';
import {
  ReliableCompetitionCreateUserInput,
  StrictCreateCompetitionArgs,
} from '../CompetitionsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableCompetitionCreateUserInput,
): Promise<StrictCreateCompetitionArgs> => data;
