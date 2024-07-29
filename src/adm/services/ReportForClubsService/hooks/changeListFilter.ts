import {Context} from '../../types';
import {QueryAllReportForClubsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllReportForClubsArgs = QueryAllReportForClubsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
