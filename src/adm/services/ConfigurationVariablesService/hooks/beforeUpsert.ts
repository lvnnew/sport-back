import {Context} from '../../types';
import {
  StrictUpdateConfigurationVariableArgs,
  StrictCreateConfigurationVariableArgs,
  ReliableConfigurationVariableCreateUserInput,
} from '../ConfigurationVariablesService';

type InputData = {
  createData: ReliableConfigurationVariableCreateUserInput,
  updateData: StrictUpdateConfigurationVariableArgs,
};
type ReturnData = {
  createData: StrictCreateConfigurationVariableArgs,
  updateData: StrictUpdateConfigurationVariableArgs,
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
