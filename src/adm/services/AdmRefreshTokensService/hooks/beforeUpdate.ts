import {
  StrictUpdateAdmRefreshTokenArgs,
} from '../AdmRefreshTokensService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateAdmRefreshTokenArgs,
): Promise<StrictUpdateAdmRefreshTokenArgs> => data;
