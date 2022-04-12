import {Context} from '../../types';
import {MutationCreateManagerLoginArgsWithAutoDefinable} from '../ManagerLoginsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateManagerLoginArgsWithAutoDefinable,
): Promise<MutationCreateManagerLoginArgsWithAutoDefinable> => data;
