import {
  MutationUpdateRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateRoleArgs,
): Promise<MutationUpdateRoleArgs> => data;
