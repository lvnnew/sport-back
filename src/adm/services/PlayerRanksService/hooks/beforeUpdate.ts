import {
  StrictUpdatePlayerRankArgs,
} from '../PlayerRanksService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerRankArgs,
): Promise<StrictUpdatePlayerRankArgs> => data;
