import {
  MutationCreateFileArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
  data: MutationCreateFileArgs,
): Promise<MutationCreateFileArgs> => data;
