import {
  StrictUpdateAggregateTrackingArgs,
} from '../AggregateTrackingsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateAggregateTrackingArgs,
): Promise<StrictUpdateAggregateTrackingArgs> => data;
