import {Context} from '../../types';
import {StrictUpdateLanguageArgs, StrictCreateLanguageArgs} from '../LanguagesService';

type Data = {createData: StrictCreateLanguageArgs, updateData: StrictUpdateLanguageArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
