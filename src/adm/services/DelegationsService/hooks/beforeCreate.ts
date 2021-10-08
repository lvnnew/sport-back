import {
  MutationCreateDelegationArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateDelegationArgs,
): Promise<MutationCreateDelegationArgs> => data;
