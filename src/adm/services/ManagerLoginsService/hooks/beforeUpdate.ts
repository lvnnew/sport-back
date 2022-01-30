import {
  MutationUpdateManagerLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateManagerLoginArgs,
): Promise<MutationUpdateManagerLoginArgs> => data;
