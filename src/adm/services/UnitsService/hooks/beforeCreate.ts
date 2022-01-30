import {
  MutationCreateUnitArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateUnitArgs,
): Promise<MutationCreateUnitArgs> => data;
