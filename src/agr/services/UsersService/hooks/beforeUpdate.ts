import {
  MutationUpdateUserArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
  data: MutationUpdateUserArgs,
): Promise<MutationUpdateUserArgs> => data;
