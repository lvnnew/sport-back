import {
  StrictUpdateEntityArgs,
} from '../EntitiesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateEntityArgs,
): Promise<StrictUpdateEntityArgs> => data;
