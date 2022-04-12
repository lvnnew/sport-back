import {Context} from '../../types';
import {MutationCreateMessageTypeArgsWithAutoDefinable} from '../MessageTypesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateMessageTypeArgsWithAutoDefinable,
): Promise<MutationCreateMessageTypeArgsWithAutoDefinable> => data;
