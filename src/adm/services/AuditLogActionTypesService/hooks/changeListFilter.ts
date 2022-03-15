import {Context} from '../../types';
import {QueryAllAuditLogActionTypesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllAuditLogActionTypesArgs = QueryAllAuditLogActionTypesArgs>(
  args: T,
  _ctx: Context,
): Promise<T> => {
  return args;
};
