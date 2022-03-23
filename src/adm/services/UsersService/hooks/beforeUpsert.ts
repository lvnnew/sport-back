import {Context} from '../../types';
import {StrictUpdateUserArgs, StrictCreateUserArgs} from '../UsersService';

type Data = {createData: StrictCreateUserArgs, updateData: StrictUpdateUserArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
