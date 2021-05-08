import {
  MutationCreateAdminLoginArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
  data: MutationCreateAdminLoginArgs,
): Promise<MutationCreateAdminLoginArgs> => data;
