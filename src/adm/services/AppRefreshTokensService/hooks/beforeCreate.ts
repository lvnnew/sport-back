import {Context} from '../../types';
import {
  ReliableAppRefreshTokenCreateUserInput,
  StrictCreateAppRefreshTokenArgs,
} from '../AppRefreshTokensService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableAppRefreshTokenCreateUserInput,
): Promise<StrictCreateAppRefreshTokenArgs> => data;
