import {
  MutationCreateAdmRefreshTokenArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAdmRefreshTokenArgs,
): Promise<MutationCreateAdmRefreshTokenArgs> => data;
