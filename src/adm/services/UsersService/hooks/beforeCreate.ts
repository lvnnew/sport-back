import {Context} from '../../types';
import {
  ReliableUserCreateUserInput,
  StrictCreateUserArgs,
} from '../UsersService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableUserCreateUserInput,
): Promise<StrictCreateUserArgs> => data;
