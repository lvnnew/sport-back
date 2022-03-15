import {Context} from '../../types';
import {QueryAllAutogenerationRulesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAutogenerationRulesArgs = QueryAllAutogenerationRulesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
