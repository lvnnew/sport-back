import {Context} from '../../types';
import {QueryAllLanguagesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllLanguagesArgs = QueryAllLanguagesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
