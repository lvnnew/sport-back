import {Context} from '../../types';
import {
  ReliableLanguageCreateUserInput,
  StrictCreateLanguageArgs,
} from '../LanguagesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableLanguageCreateUserInput,
): Promise<StrictCreateLanguageArgs> => data;
