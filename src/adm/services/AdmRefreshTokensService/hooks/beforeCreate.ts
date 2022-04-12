import {Context} from '../../types';
import {MutationCreateAdmRefreshTokenArgsWithAutoDefinable} from '../AdmRefreshTokensService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAdmRefreshTokenArgsWithAutoDefinable,
): Promise<MutationCreateAdmRefreshTokenArgsWithAutoDefinable> => data;
