import {Context} from '../../types';
import {QueryAllUnitsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllUnitsArgs = QueryAllUnitsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
