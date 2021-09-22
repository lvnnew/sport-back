import {
  MutationUpdateUnitArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateUnitArgs,
): Promise<MutationUpdateUnitArgs> => data;
