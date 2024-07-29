import {Context} from '../../types';
import {
  StrictUpdateMatchVideoArgs,
  StrictCreateMatchVideoArgs,
  ReliableMatchVideoCreateUserInput,
} from '../MatchVideosService';

type InputData = {
  createData: ReliableMatchVideoCreateUserInput,
  updateData: StrictUpdateMatchVideoArgs,
};
type ReturnData = {
  createData: StrictCreateMatchVideoArgs,
  updateData: StrictUpdateMatchVideoArgs,
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
