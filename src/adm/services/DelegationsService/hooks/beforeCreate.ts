import {
  MutationCreateDelegationArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateDelegationArgs,
): Promise<MutationCreateDelegationArgs> => data;
