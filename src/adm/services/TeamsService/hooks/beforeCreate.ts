import {Context} from '../../types';
import {
  ReliableTeamCreateUserInput,
  StrictCreateTeamArgs,
} from '../TeamsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableTeamCreateUserInput,
): Promise<StrictCreateTeamArgs> => data;
