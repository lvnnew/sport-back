import {
  StrictUpdateMatchArgs,
} from '../MatchesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMatchArgs,
): Promise<StrictUpdateMatchArgs> => data;
