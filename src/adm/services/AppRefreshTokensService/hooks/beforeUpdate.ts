import {
  StrictUpdateAppRefreshTokenArgs,
} from '../AppRefreshTokensService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateAppRefreshTokenArgs,
): Promise<StrictUpdateAppRefreshTokenArgs> => data;
