import {Context} from '../../types';
import {QueryAllPeriodTypesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPeriodTypesArgs = QueryAllPeriodTypesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
