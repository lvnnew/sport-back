import {
  MutationUpdateFileArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
  data: MutationUpdateFileArgs,
): Promise<MutationUpdateFileArgs> => data;
