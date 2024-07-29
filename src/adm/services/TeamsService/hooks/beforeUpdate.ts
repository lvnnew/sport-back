import {
  StrictUpdateTeamArgs,
} from '../TeamsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateTeamArgs,
): Promise<StrictUpdateTeamArgs> => data;
