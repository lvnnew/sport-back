import {Context} from '../../types';
import {
  ReliableAggregateTrackingCreateUserInput,
  StrictCreateAggregateTrackingArgs,
} from '../AggregateTrackingsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableAggregateTrackingCreateUserInput,
): Promise<StrictCreateAggregateTrackingArgs> => data;
