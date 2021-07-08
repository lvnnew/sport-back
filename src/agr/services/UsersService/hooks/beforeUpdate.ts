import {
  MutationUpdateUserArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateUserArgs,
): Promise<MutationUpdateUserArgs> => data;
