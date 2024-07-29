import {Context} from '../../types';
import {
  StrictUpdatePeriodTypeArgs,
  StrictCreatePeriodTypeArgs,
  ReliablePeriodTypeCreateUserInput,
} from '../PeriodTypesService';

type InputData = {
  createData: ReliablePeriodTypeCreateUserInput,
  updateData: StrictUpdatePeriodTypeArgs,
};
type ReturnData = {
  createData: StrictCreatePeriodTypeArgs,
  updateData: StrictUpdatePeriodTypeArgs,
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
