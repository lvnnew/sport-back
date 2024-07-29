import {Context} from '../../types';
import {
  StrictUpdateParentArgs,
  StrictCreateParentArgs,
  ReliableParentCreateUserInput,
} from '../ParentsService';

type InputData = {
  createData: ReliableParentCreateUserInput,
  updateData: StrictUpdateParentArgs,
};
type ReturnData = {
  createData: StrictCreateParentArgs,
  updateData: StrictUpdateParentArgs,
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
