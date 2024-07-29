import {Context} from '../../types';
import {QueryAllWscContactsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllWscContactsArgs = QueryAllWscContactsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
