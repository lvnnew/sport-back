import {Context} from '../../types';
import {QueryAllLanguagesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllLanguagesArgs = QueryAllLanguagesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
