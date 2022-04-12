import {Context} from '../../types';
import {MutationCreateEntityArgsWithAutoDefinable} from '../EntitiesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateEntityArgsWithAutoDefinable,
): Promise<MutationCreateEntityArgsWithAutoDefinable> => data;
