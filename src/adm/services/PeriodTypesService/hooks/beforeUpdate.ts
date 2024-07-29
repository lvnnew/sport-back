import {
  StrictUpdatePeriodTypeArgs,
} from '../PeriodTypesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePeriodTypeArgs,
): Promise<StrictUpdatePeriodTypeArgs> => data;
