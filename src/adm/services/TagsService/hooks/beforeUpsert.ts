import {Context} from '../../types';
import {StrictUpdateTagArgs, StrictCreateTagArgs} from '../TagsService';

type Data = {createData: StrictCreateTagArgs, updateData: StrictUpdateTagArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
