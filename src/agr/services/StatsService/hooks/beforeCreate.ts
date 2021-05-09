import {
  MutationCreateStatArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
  data: MutationCreateStatArgs,
): Promise<MutationCreateStatArgs> => data;
