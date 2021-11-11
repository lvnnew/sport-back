import {
  MutationCreateAutogenerationRuleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateAutogenerationRuleArgs,
): Promise<MutationCreateAutogenerationRuleArgs> => data;
