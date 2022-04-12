import {Context} from '../../types';
import {MutationCreateStatArgsWithAutoDefinable} from '../StatsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateStatArgsWithAutoDefinable,
): Promise<MutationCreateStatArgsWithAutoDefinable> => data;
