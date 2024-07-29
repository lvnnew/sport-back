import {
  StrictUpdateWscMessageArgs,
} from '../WscMessagesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateWscMessageArgs,
): Promise<StrictUpdateWscMessageArgs> => data;
