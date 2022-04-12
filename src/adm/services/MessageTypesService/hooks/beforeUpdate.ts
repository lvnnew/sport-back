import {
  StrictUpdateMessageTypeArgs,
} from '../MessageTypesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMessageTypeArgs,
): Promise<StrictUpdateMessageTypeArgs> => data;
