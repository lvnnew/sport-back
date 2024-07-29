import {Context} from '../../types';
import {
  ReliableTeamForCompetitionCreateUserInput,
  StrictCreateTeamForCompetitionArgs,
} from '../TeamForCompetitionsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableTeamForCompetitionCreateUserInput,
): Promise<StrictCreateTeamForCompetitionArgs> => data;
