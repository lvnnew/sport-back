import {
  StrictUpdateUnitArgs,
} from '../UnitsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateUnitArgs,
): Promise<StrictUpdateUnitArgs> => data;
