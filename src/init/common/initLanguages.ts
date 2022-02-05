import {Context} from '../../adm/services/types';
import Language from '../../types/Language';

// DO NOT EDIT! THIS IS GENERATED FILE

const initLanguages = async (ctx: Context) => {
  await ctx.service('languages').upsert({
    id: Language.Ru,
    title: 'Russian',
  });
  await ctx.service('languages').upsert({
    id: Language.En,
    title: 'English',
  });
};

export default initLanguages;
