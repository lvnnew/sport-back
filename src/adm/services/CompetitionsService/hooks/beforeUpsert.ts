import {Context} from '../../types';
import {
  StrictUpdateCompetitionArgs,
  StrictCreateCompetitionArgs,
  ReliableCompetitionCreateUserInput,
} from '../CompetitionsService';

type InputData = {
  createData: ReliableCompetitionCreateUserInput,
  updateData: StrictUpdateCompetitionArgs,
};
type ReturnData = {
  createData: StrictCreateCompetitionArgs,
  updateData: StrictUpdateCompetitionArgs,
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
