import {Context} from '../../types';
import {QueryAllMailingTypesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMailingTypesArgs = QueryAllMailingTypesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
