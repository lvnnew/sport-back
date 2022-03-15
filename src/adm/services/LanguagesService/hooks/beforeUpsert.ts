import {Context} from '../../types';
import {StrictUpdateLanguageArgs, StrictCreateLanguageArgs} from '../LanguagesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateLanguageArgs,
  updateData: StrictUpdateLanguageArgs,
): Promise<{createData: StrictCreateLanguageArgs, updateData: StrictUpdateLanguageArgs}> => {
  return {createData, updateData};
};
