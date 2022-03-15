import {Context} from '../../types';
import {StrictUpdateStatArgs, StrictCreateStatArgs} from '../StatsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateStatArgs,
  updateData: StrictUpdateStatArgs,
): Promise<{createData: StrictCreateStatArgs, updateData: StrictUpdateStatArgs}> => {
  return {createData, updateData};
};
