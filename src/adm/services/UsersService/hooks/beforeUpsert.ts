import {Context} from '../../types';
import {StrictUpdateUserArgs, StrictCreateUserArgs} from '../UsersService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateUserArgs,
  updateData: StrictUpdateUserArgs,
): Promise<{createData: StrictCreateUserArgs, updateData: StrictUpdateUserArgs}> => {
  return {createData, updateData};
};
