import {
  MutationUpdateAppLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateAppLoginArgs,
): Promise<MutationUpdateAppLoginArgs> => data;
