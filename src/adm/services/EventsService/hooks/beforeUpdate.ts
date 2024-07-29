import {
  StrictUpdateEventArgs,
} from '../EventsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateEventArgs,
): Promise<StrictUpdateEventArgs> => data;
