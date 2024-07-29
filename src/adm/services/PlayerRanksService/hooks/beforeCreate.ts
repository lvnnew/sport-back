import {Context} from '../../types';
import {
  ReliablePlayerRankCreateUserInput,
  StrictCreatePlayerRankArgs,
} from '../PlayerRanksService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerRankCreateUserInput,
): Promise<StrictCreatePlayerRankArgs> => data;
