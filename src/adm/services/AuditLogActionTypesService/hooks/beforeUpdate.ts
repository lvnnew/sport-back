import {
  MutationUpdateAuditLogActionTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateAuditLogActionTypeArgs,
): Promise<MutationUpdateAuditLogActionTypeArgs> => data;
