import {
  StrictUpdatePlayerForCompetitionTeamArgs,
} from '../PlayerForCompetitionTeamsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerForCompetitionTeamArgs,
): Promise<StrictUpdatePlayerForCompetitionTeamArgs> => data;
