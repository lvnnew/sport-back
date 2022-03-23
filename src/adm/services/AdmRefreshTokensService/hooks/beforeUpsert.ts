import {Context} from '../../types';
import {StrictUpdateAdmRefreshTokenArgs, StrictCreateAdmRefreshTokenArgs} from '../AdmRefreshTokensService';

type Data = {createData: StrictCreateAdmRefreshTokenArgs, updateData: StrictUpdateAdmRefreshTokenArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
