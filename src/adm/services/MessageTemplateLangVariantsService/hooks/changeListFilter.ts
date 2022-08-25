import {Context} from '../../types';
import {QueryAllMessageTemplateLangVariantsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMessageTemplateLangVariantsArgs = QueryAllMessageTemplateLangVariantsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
