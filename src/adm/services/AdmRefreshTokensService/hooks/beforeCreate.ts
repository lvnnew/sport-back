import {Context} from '../../types';
import {
  ReliableAdmRefreshTokenCreateUserInput,
  StrictCreateAdmRefreshTokenArgs,
} from '../AdmRefreshTokensService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableAdmRefreshTokenCreateUserInput,
): Promise<StrictCreateAdmRefreshTokenArgs> => data;
