import {
  StrictUpdateTagArgs,
} from '../TagsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateTagArgs,
): Promise<StrictUpdateTagArgs> => data;
