import {
  MutationUpdateFileArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateFileArgs,
): Promise<MutationUpdateFileArgs> => data;
