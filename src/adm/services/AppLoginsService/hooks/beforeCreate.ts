import {Context} from '../../types';
import {MutationCreateAppLoginArgsWithAutoDefinable} from '../AppLoginsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAppLoginArgsWithAutoDefinable,
): Promise<MutationCreateAppLoginArgsWithAutoDefinable> => data;
