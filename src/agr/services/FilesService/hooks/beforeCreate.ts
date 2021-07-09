import {
  MutationCreateFileArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateFileArgs,
): Promise<MutationCreateFileArgs> => data;
