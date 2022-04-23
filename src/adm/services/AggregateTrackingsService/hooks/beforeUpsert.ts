import {Context} from '../../types';
import {
  StrictUpdateAggregateTrackingArgs,
  StrictCreateAggregateTrackingArgs,
  ReliableAggregateTrackingCreateUserInput,
} from '../AggregateTrackingsService';

type InputData = {
  createData: ReliableAggregateTrackingCreateUserInput,
  updateData: StrictUpdateAggregateTrackingArgs,
};
type ReturnData = {
  createData: StrictCreateAggregateTrackingArgs,
  updateData: StrictUpdateAggregateTrackingArgs,
};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: InputData,
): Promise<ReturnData> => {
  return {
    createData,
    updateData,
  };
};
