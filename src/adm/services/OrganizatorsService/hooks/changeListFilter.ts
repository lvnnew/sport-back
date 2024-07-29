import {Context} from '../../types';
import {QueryAllOrganizatorsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllOrganizatorsArgs = QueryAllOrganizatorsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
