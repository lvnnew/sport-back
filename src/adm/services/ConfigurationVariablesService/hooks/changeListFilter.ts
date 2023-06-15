import {Context} from '../../types';
import {QueryAllConfigurationVariablesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllConfigurationVariablesArgs = QueryAllConfigurationVariablesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
