import {Context} from '../../types';
import {
  ReliablePlayerForCompetitionTeamCreateUserInput,
  StrictCreatePlayerForCompetitionTeamArgs,
} from '../PlayerForCompetitionTeamsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerForCompetitionTeamCreateUserInput,
): Promise<StrictCreatePlayerForCompetitionTeamArgs> => data;
