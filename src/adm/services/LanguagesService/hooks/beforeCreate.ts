import {
  MutationCreateLanguageArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateLanguageArgs,
): Promise<MutationCreateLanguageArgs> => data;
