import {Context} from '../../types';
import {
  StrictUpdateMatchPeriodMarkupArgs,
  StrictCreateMatchPeriodMarkupArgs,
  ReliableMatchPeriodMarkupCreateUserInput,
} from '../MatchPeriodMarkupsService';

type InputData = {
  createData: ReliableMatchPeriodMarkupCreateUserInput,
  updateData: StrictUpdateMatchPeriodMarkupArgs,
};
type ReturnData = {
  createData: StrictCreateMatchPeriodMarkupArgs,
  updateData: StrictUpdateMatchPeriodMarkupArgs,
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
