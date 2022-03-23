import {Context} from '../../types';
import {QueryAllManagersArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagersArgs = QueryAllManagersArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
