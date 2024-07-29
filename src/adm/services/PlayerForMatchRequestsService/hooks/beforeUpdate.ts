import {
  StrictUpdatePlayerForMatchRequestArgs,
} from '../PlayerForMatchRequestsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerForMatchRequestArgs,
): Promise<StrictUpdatePlayerForMatchRequestArgs> => data;
