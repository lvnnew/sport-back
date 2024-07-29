import {Context} from '../../types';
import {
  ReliablePlayerCreateUserInput,
  StrictCreatePlayerArgs,
} from '../PlayersService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerCreateUserInput,
): Promise<StrictCreatePlayerArgs> => data;
