import {Context} from '../../types';
import {MutationCreateUserArgsWithAutoDefinable} from '../UsersService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateUserArgsWithAutoDefinable,
): Promise<MutationCreateUserArgsWithAutoDefinable> => data;
