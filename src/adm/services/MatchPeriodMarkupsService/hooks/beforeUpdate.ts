import {
  StrictUpdateMatchPeriodMarkupArgs,
} from '../MatchPeriodMarkupsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMatchPeriodMarkupArgs,
): Promise<StrictUpdateMatchPeriodMarkupArgs> => data;
