import {Context} from '../../types';
import {QueryAllReportForOrganizationsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllReportForOrganizationsArgs = QueryAllReportForOrganizationsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
