import {
  MutationUpdateAdminArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
  data: MutationUpdateAdminArgs,
): Promise<MutationUpdateAdminArgs> => data;
