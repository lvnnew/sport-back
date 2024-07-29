import {Context} from '../../types';
import {QueryAllPlayersArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllPlayersArgs = QueryAllPlayersArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
