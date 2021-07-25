import {
  MutationCreateManagersToRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateManagersToRoleArgs,
): Promise<MutationCreateManagersToRoleArgs> => data;
