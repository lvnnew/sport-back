import {Context} from '../../types';
import {QueryAllUnitsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllUnitsArgs = QueryAllUnitsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
