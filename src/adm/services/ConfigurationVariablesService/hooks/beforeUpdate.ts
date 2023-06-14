import {
  StrictUpdateConfigurationVariableArgs,
} from '../ConfigurationVariablesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateConfigurationVariableArgs,
): Promise<StrictUpdateConfigurationVariableArgs> => data;
