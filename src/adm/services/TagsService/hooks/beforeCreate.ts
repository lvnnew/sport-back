import {Context} from '../../types';
import {MutationCreateTagArgsWithAutoDefinable} from '../TagsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateTagArgsWithAutoDefinable,
): Promise<MutationCreateTagArgsWithAutoDefinable> => data;
