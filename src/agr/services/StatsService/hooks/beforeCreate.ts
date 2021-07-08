import {
  MutationCreateStatArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateStatArgs,
): Promise<MutationCreateStatArgs> => data;
