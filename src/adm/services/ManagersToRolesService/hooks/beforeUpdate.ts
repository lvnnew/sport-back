import {
  MutationUpdateManagersToRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateManagersToRoleArgs,
): Promise<MutationUpdateManagersToRoleArgs> => data;
