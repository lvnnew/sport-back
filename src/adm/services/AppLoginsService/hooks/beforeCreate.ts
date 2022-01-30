import {
  MutationCreateAppLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAppLoginArgs,
): Promise<MutationCreateAppLoginArgs> => data;
