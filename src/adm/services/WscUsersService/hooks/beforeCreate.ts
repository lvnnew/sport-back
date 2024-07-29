import {Context} from '../../types';
import {
  ReliableWscUserCreateUserInput,
  StrictCreateWscUserArgs,
} from '../WscUsersService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableWscUserCreateUserInput,
): Promise<StrictCreateWscUserArgs> => data;
