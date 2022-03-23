import {
  StrictUpdateUserArgs,
} from '../UsersService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateUserArgs,
): Promise<StrictUpdateUserArgs> => data;
