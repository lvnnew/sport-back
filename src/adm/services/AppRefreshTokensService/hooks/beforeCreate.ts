import {Context} from '../../types';
import {MutationCreateAppRefreshTokenArgsWithAutoDefinable} from '../AppRefreshTokensService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAppRefreshTokenArgsWithAutoDefinable,
): Promise<MutationCreateAppRefreshTokenArgsWithAutoDefinable> => data;
