import {
  MutationUpdateLanguageArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateLanguageArgs,
): Promise<MutationUpdateLanguageArgs> => data;
