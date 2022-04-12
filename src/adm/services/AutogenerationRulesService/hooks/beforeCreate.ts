import {Context} from '../../types';
import {
  ReliableAutogenerationRuleCreateUserInput,
  StrictCreateAutogenerationRuleArgs,
} from '../AutogenerationRulesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableAutogenerationRuleCreateUserInput,
): Promise<StrictCreateAutogenerationRuleArgs> => data;
