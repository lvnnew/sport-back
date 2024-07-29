import {Context} from '../../types';
import {
  StrictUpdatePlayerForTeamMatchListArgs,
  StrictCreatePlayerForTeamMatchListArgs,
  ReliablePlayerForTeamMatchListCreateUserInput,
} from '../PlayerForTeamMatchListsService';

type InputData = {
  createData: ReliablePlayerForTeamMatchListCreateUserInput,
  updateData: StrictUpdatePlayerForTeamMatchListArgs,
};
type ReturnData = {
  createData: StrictCreatePlayerForTeamMatchListArgs,
  updateData: StrictUpdatePlayerForTeamMatchListArgs,
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
