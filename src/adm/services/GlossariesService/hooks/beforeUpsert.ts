import {Context} from '../../types';
import {
  StrictUpdateGlossaryArgs,
  StrictCreateGlossaryArgs,
  ReliableGlossaryCreateUserInput,
} from '../GlossariesService';

type InputData = {
  createData: ReliableGlossaryCreateUserInput,
  updateData: StrictUpdateGlossaryArgs,
};
type ReturnData = {
  createData: StrictCreateGlossaryArgs,
  updateData: StrictUpdateGlossaryArgs,
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
