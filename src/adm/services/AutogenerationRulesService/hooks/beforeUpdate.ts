import {
  MutationUpdateAutogenerationRuleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateAutogenerationRuleArgs,
): Promise<MutationUpdateAutogenerationRuleArgs> => data;
