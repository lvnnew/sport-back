import {Context} from '../../types';
import {QueryAllReportForParentsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllReportForParentsArgs = QueryAllReportForParentsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
