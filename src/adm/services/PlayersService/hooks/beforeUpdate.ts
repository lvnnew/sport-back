import {
  StrictUpdatePlayerArgs,
} from '../PlayersService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerArgs,
): Promise<StrictUpdatePlayerArgs> => data;
