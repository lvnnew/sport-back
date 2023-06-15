import {Context} from '../../types';
import {
  ReliableConfigurationVariableCreateUserInput,
  StrictCreateConfigurationVariableArgs,
} from '../ConfigurationVariablesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableConfigurationVariableCreateUserInput,
): Promise<StrictCreateConfigurationVariableArgs> => data;
