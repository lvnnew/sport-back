import {Context} from '../../types';
import {QueryAllAuditLogActionTypesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAuditLogActionTypesArgs = QueryAllAuditLogActionTypesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
