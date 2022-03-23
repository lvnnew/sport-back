import {Context} from '../../types';
import {StrictUpdateAppRefreshTokenArgs, StrictCreateAppRefreshTokenArgs} from '../AppRefreshTokensService';

type Data = {createData: StrictCreateAppRefreshTokenArgs, updateData: StrictUpdateAppRefreshTokenArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
