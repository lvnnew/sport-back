import {
  MutationUpdateAdmRefreshTokenArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateAdmRefreshTokenArgs,
): Promise<MutationUpdateAdmRefreshTokenArgs> => data;
