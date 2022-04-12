import {Context} from '../../types';
import {
  ReliableStatCreateUserInput,
  StrictCreateStatArgs,
} from '../StatsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableStatCreateUserInput,
): Promise<StrictCreateStatArgs> => data;
