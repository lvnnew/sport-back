import {
  MutationCreateAutogenerationRuleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateAutogenerationRuleArgs,
): Promise<MutationCreateAutogenerationRuleArgs> => data;
