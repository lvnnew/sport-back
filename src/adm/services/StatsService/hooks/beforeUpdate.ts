import {
  StrictUpdateStatArgs,
} from '../StatsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateStatArgs,
): Promise<StrictUpdateStatArgs> => data;
