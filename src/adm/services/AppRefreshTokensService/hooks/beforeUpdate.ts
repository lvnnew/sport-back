import {
  MutationUpdateAppRefreshTokenArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateAppRefreshTokenArgs,
): Promise<MutationUpdateAppRefreshTokenArgs> => data;
