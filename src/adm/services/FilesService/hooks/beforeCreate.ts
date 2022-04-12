import {Context} from '../../types';
import {MutationCreateFileArgsWithAutoDefinable} from '../FilesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateFileArgsWithAutoDefinable,
): Promise<MutationCreateFileArgsWithAutoDefinable> => data;
