import {
  MutationUpdateAdminLoginArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
  data: MutationUpdateAdminLoginArgs,
): Promise<MutationUpdateAdminLoginArgs> => data;
