import {Context} from '../../types';
import {QueryAllTeamMatchReportsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllTeamMatchReportsArgs = QueryAllTeamMatchReportsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
