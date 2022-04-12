import {Context} from '../../types';
import {MutationCreateManagersToRoleArgsWithAutoDefinable} from '../ManagersToRolesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateManagersToRoleArgsWithAutoDefinable,
): Promise<MutationCreateManagersToRoleArgsWithAutoDefinable> => data;
