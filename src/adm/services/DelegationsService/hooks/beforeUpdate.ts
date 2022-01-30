import {
  MutationUpdateDelegationArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateDelegationArgs,
): Promise<MutationUpdateDelegationArgs> => data;
