import {
  StrictUpdateWscUserArgs,
} from '../WscUsersService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateWscUserArgs,
): Promise<StrictUpdateWscUserArgs> => data;
