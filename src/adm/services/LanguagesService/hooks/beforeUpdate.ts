import {
  MutationUpdateLanguageArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateLanguageArgs,
): Promise<MutationUpdateLanguageArgs> => data;
