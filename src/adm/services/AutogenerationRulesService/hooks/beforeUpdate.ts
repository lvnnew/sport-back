import {
  StrictUpdateAutogenerationRuleArgs,
} from '../AutogenerationRulesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateAutogenerationRuleArgs,
): Promise<StrictUpdateAutogenerationRuleArgs> => data;
