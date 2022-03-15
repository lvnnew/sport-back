import {Context} from '../../types';
import {StrictUpdateUnitArgs, StrictCreateUnitArgs} from '../UnitsService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateUnitArgs,
  updateData: StrictUpdateUnitArgs,
): Promise<{createData: StrictCreateUnitArgs, updateData: StrictUpdateUnitArgs}> => {
  return {createData, updateData};
};
