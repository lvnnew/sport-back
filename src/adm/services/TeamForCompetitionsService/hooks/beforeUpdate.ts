import {
  StrictUpdateTeamForCompetitionArgs,
} from '../TeamForCompetitionsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateTeamForCompetitionArgs,
): Promise<StrictUpdateTeamForCompetitionArgs> => data;
