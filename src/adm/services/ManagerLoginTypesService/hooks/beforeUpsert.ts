import {Context} from '../../types';
import {
  StrictUpdateManagerLoginTypeArgs,
  StrictCreateManagerLoginTypeArgs,
  ReliableManagerLoginTypeCreateUserInput,
} from '../ManagerLoginTypesService';

type InputData = {
  createData: ReliableManagerLoginTypeCreateUserInput,
  updateData: StrictUpdateManagerLoginTypeArgs,
};
type ReturnData = {
  createData: StrictCreateManagerLoginTypeArgs,
  updateData: StrictUpdateManagerLoginTypeArgs,
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
