import {Context} from '../../types';
import {StrictUpdateAutogenerationRuleArgs, StrictCreateAutogenerationRuleArgs} from '../AutogenerationRulesService';

type Data = {createData: StrictCreateAutogenerationRuleArgs, updateData: StrictUpdateAutogenerationRuleArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
