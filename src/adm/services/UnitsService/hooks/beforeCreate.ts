import {
  MutationCreateUnitArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateUnitArgs,
): Promise<MutationCreateUnitArgs> => data;
