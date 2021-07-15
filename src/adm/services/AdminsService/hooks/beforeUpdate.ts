import {
  MutationUpdateAdminArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateAdminArgs,
): Promise<MutationUpdateAdminArgs> => data;
