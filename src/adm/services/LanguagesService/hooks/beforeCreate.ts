import {
  MutationCreateLanguageArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateLanguageArgs,
): Promise<MutationCreateLanguageArgs> => data;
