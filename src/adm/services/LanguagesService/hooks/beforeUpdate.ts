import {
  StrictUpdateLanguageArgs,
} from '../LanguagesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateLanguageArgs,
): Promise<StrictUpdateLanguageArgs> => data;
