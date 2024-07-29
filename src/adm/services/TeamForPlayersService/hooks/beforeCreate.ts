import {Context} from '../../types';
import {
  ReliableTeamForPlayerCreateUserInput,
  StrictCreateTeamForPlayerArgs,
} from '../TeamForPlayersService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableTeamForPlayerCreateUserInput,
): Promise<StrictCreateTeamForPlayerArgs> => data;
