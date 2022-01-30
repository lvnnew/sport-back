import {
  MutationUpdateRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateRoleArgs,
): Promise<MutationUpdateRoleArgs> => data;
