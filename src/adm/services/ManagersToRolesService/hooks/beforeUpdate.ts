import {
  MutationUpdateManagersToRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateManagersToRoleArgs,
): Promise<MutationUpdateManagersToRoleArgs> => data;
