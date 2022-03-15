import {Context} from '../../types';
import {StrictUpdateAdmRefreshTokenArgs, StrictCreateAdmRefreshTokenArgs} from '../AdmRefreshTokensService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateAdmRefreshTokenArgs,
  updateData: StrictUpdateAdmRefreshTokenArgs,
): Promise<{createData: StrictCreateAdmRefreshTokenArgs, updateData: StrictUpdateAdmRefreshTokenArgs}> => {
  return {createData, updateData};
};
