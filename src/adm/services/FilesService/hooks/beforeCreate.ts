import {Context} from '../../types';
import {
  ReliableFileCreateUserInput,
  StrictCreateFileArgs,
} from '../FilesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableFileCreateUserInput,
): Promise<StrictCreateFileArgs> => data;
