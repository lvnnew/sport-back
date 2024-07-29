import {
  StrictUpdateMatchRequestArgs,
} from '../MatchRequestsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMatchRequestArgs,
): Promise<StrictUpdateMatchRequestArgs> => data;
