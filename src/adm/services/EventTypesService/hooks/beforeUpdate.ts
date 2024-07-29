import {
  StrictUpdateEventTypeArgs,
} from '../EventTypesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateEventTypeArgs,
): Promise<StrictUpdateEventTypeArgs> => data;
