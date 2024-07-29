import {Context} from '../../types';
import {
  ReliablePeriodTypeCreateUserInput,
  StrictCreatePeriodTypeArgs,
} from '../PeriodTypesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePeriodTypeCreateUserInput,
): Promise<StrictCreatePeriodTypeArgs> => data;
