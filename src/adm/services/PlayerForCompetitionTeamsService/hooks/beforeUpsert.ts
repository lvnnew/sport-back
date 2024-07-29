import {Context} from '../../types';
import {
  StrictUpdatePlayerForCompetitionTeamArgs,
  StrictCreatePlayerForCompetitionTeamArgs,
  ReliablePlayerForCompetitionTeamCreateUserInput,
} from '../PlayerForCompetitionTeamsService';

type InputData = {
  createData: ReliablePlayerForCompetitionTeamCreateUserInput,
  updateData: StrictUpdatePlayerForCompetitionTeamArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerForCompetitionTeamArgs,
  updateData: StrictUpdatePlayerForCompetitionTeamArgs,
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
