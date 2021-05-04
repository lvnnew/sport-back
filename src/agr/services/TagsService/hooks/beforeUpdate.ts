import {
  MutationUpdateTagArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
  data: MutationUpdateTagArgs,
): Promise<MutationUpdateTagArgs> => data;
