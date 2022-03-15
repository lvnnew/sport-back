import {Context} from '../../types';
import {StrictUpdateAutogenerationRuleArgs, StrictCreateAutogenerationRuleArgs} from '../AutogenerationRulesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateAutogenerationRuleArgs,
  updateData: StrictUpdateAutogenerationRuleArgs,
): Promise<{createData: StrictCreateAutogenerationRuleArgs, updateData: StrictUpdateAutogenerationRuleArgs}> => {
  return {createData, updateData};
};
