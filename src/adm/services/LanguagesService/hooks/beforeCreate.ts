import {Context} from '../../types';
import {MutationCreateLanguageArgsWithAutoDefinable} from '../LanguagesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateLanguageArgsWithAutoDefinable,
): Promise<MutationCreateLanguageArgsWithAutoDefinable> => data;
