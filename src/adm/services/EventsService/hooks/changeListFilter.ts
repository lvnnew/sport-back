import {Context} from '../../types';
import {QueryAllEventsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllEventsArgs = QueryAllEventsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
