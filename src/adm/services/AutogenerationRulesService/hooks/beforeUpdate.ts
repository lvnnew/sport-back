import {
  MutationUpdateAutogenerationRuleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateAutogenerationRuleArgs,
): Promise<MutationUpdateAutogenerationRuleArgs> => data;
