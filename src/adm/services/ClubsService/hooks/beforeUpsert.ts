import {Context} from '../../types';
import {
  StrictUpdateClubArgs,
  StrictCreateClubArgs,
  ReliableClubCreateUserInput,
} from '../ClubsService';

type InputData = {
  createData: ReliableClubCreateUserInput,
  updateData: StrictUpdateClubArgs,
};
type ReturnData = {
  createData: StrictCreateClubArgs,
  updateData: StrictUpdateClubArgs,
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
