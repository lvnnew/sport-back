import {Context} from '../../types';
import {MutationCreateRoleArgsWithAutoDefinable} from '../RolesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateRoleArgsWithAutoDefinable,
): Promise<MutationCreateRoleArgsWithAutoDefinable> => data;
