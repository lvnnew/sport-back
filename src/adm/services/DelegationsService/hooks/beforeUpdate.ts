import {
  MutationUpdateDelegationArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateDelegationArgs,
): Promise<MutationUpdateDelegationArgs> => data;
