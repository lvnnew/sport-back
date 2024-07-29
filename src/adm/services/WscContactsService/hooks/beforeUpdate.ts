import {
  StrictUpdateWscContactArgs,
} from '../WscContactsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateWscContactArgs,
): Promise<StrictUpdateWscContactArgs> => data;
