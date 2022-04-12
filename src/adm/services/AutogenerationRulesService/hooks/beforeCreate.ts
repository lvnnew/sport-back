import {Context} from '../../types';
import {MutationCreateAutogenerationRuleArgsWithAutoDefinable} from '../AutogenerationRulesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAutogenerationRuleArgsWithAutoDefinable,
): Promise<MutationCreateAutogenerationRuleArgsWithAutoDefinable> => data;
