import {Context} from '../../types';
import {QueryAllReportForTeamsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllReportForTeamsArgs = QueryAllReportForTeamsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
