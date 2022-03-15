import {Context} from '../../types';
import {QueryAllManagersArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllManagersArgs = QueryAllManagersArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
