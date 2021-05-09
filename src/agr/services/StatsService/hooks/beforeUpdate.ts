import {
  MutationUpdateStatArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
  data: MutationUpdateStatArgs,
): Promise<MutationUpdateStatArgs> => data;
