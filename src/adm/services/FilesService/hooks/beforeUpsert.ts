import {Context} from '../../types';
import {StrictUpdateFileArgs, StrictCreateFileArgs} from '../FilesService';

type Data = {createData: StrictCreateFileArgs, updateData: StrictUpdateFileArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
