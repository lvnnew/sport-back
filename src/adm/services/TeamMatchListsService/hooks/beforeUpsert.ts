import {Context} from '../../types';
import {
  StrictUpdateTeamMatchListArgs,
  StrictCreateTeamMatchListArgs,
  ReliableTeamMatchListCreateUserInput,
} from '../TeamMatchListsService';

type InputData = {
  createData: ReliableTeamMatchListCreateUserInput,
  updateData: StrictUpdateTeamMatchListArgs,
};
type ReturnData = {
  createData: StrictCreateTeamMatchListArgs,
  updateData: StrictUpdateTeamMatchListArgs,
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
