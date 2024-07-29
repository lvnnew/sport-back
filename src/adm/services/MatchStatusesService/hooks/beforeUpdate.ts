import {
  StrictUpdateMatchStatusArgs,
} from '../MatchStatusesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMatchStatusArgs,
): Promise<StrictUpdateMatchStatusArgs> => data;
