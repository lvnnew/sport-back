import {Context} from '../../types';
import {QueryAllAuditLogsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAuditLogsArgs = QueryAllAuditLogsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
