import {
  StrictUpdateTeamForPlayerArgs,
} from '../TeamForPlayersService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateTeamForPlayerArgs,
): Promise<StrictUpdateTeamForPlayerArgs> => data;
