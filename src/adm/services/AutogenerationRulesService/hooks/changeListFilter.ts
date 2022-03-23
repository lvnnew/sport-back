import {Context} from '../../types';
import {QueryAllAutogenerationRulesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAutogenerationRulesArgs = QueryAllAutogenerationRulesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
