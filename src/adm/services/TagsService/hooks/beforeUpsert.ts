import {Context} from '../../types';
import {StrictUpdateTagArgs, StrictCreateTagArgs} from '../TagsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateTagArgs,
  updateData: StrictUpdateTagArgs,
): Promise<{createData: StrictCreateTagArgs, updateData: StrictUpdateTagArgs}> => {
  return {createData, updateData};
};
