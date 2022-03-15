import {Context} from '../../types';
import {QueryAllAuditLogsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAuditLogsArgs = QueryAllAuditLogsArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
