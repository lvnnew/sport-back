import {
  MutationUpdateStatArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateStatArgs,
): Promise<MutationUpdateStatArgs> => data;
