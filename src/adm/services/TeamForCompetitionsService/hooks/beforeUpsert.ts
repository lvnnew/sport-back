import {Context} from '../../types';
import {
  StrictUpdateTeamForCompetitionArgs,
  StrictCreateTeamForCompetitionArgs,
  ReliableTeamForCompetitionCreateUserInput,
} from '../TeamForCompetitionsService';

type InputData = {
  createData: ReliableTeamForCompetitionCreateUserInput,
  updateData: StrictUpdateTeamForCompetitionArgs,
};
type ReturnData = {
  createData: StrictCreateTeamForCompetitionArgs,
  updateData: StrictUpdateTeamForCompetitionArgs,
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
