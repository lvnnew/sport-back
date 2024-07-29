import {Context} from '../../types';
import {
  StrictUpdateTeamForPlayerArgs,
  StrictCreateTeamForPlayerArgs,
  ReliableTeamForPlayerCreateUserInput,
} from '../TeamForPlayersService';

type InputData = {
  createData: ReliableTeamForPlayerCreateUserInput,
  updateData: StrictUpdateTeamForPlayerArgs,
};
type ReturnData = {
  createData: StrictCreateTeamForPlayerArgs,
  updateData: StrictUpdateTeamForPlayerArgs,
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
