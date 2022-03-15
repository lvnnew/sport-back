import {Context} from '../../types';
import {StrictUpdateEntityArgs, StrictCreateEntityArgs} from '../EntitiesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateEntityArgs,
  updateData: StrictUpdateEntityArgs,
): Promise<{createData: StrictCreateEntityArgs, updateData: StrictUpdateEntityArgs}> => {
  return {createData, updateData};
};
