import {Context} from '../../types';
import {QueryAllMatchPeriodMarkupsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMatchPeriodMarkupsArgs = QueryAllMatchPeriodMarkupsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
