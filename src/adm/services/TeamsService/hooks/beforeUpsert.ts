import {Context} from '../../types';
import {
  StrictUpdateTeamArgs,
  StrictCreateTeamArgs,
  ReliableTeamCreateUserInput,
} from '../TeamsService';

type InputData = {
  createData: ReliableTeamCreateUserInput,
  updateData: StrictUpdateTeamArgs,
};
type ReturnData = {
  createData: StrictCreateTeamArgs,
  updateData: StrictUpdateTeamArgs,
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
