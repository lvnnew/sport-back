import {Context} from '../../types';
import {
  StrictUpdateMailingTypeArgs,
  StrictCreateMailingTypeArgs,
  ReliableMailingTypeCreateUserInput,
} from '../MailingTypesService';

type InputData = {
  createData: ReliableMailingTypeCreateUserInput,
  updateData: StrictUpdateMailingTypeArgs,
};
type ReturnData = {
  createData: StrictCreateMailingTypeArgs,
  updateData: StrictUpdateMailingTypeArgs,
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
