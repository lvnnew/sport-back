import {Context} from '../../types';
import {StrictUpdateFileArgs, StrictCreateFileArgs} from '../FilesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateFileArgs,
  updateData: StrictUpdateFileArgs,
): Promise<{createData: StrictCreateFileArgs, updateData: StrictUpdateFileArgs}> => {
  return {createData, updateData};
};
