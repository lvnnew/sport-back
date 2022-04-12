import {
  StrictUpdateFileArgs,
} from '../FilesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateFileArgs,
): Promise<StrictUpdateFileArgs> => data;
