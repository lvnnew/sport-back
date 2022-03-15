import {Context} from '../../types';
import {StrictUpdateAppRefreshTokenArgs, StrictCreateAppRefreshTokenArgs} from '../AppRefreshTokensService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateAppRefreshTokenArgs,
  updateData: StrictUpdateAppRefreshTokenArgs,
): Promise<{createData: StrictCreateAppRefreshTokenArgs, updateData: StrictUpdateAppRefreshTokenArgs}> => {
  return {createData, updateData};
};
