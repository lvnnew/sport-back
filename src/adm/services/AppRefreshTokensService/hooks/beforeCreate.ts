import {
  MutationCreateAppRefreshTokenArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAppRefreshTokenArgs,
): Promise<MutationCreateAppRefreshTokenArgs> => data;
