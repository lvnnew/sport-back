import {
  MutationCreateAdminArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
  data: MutationCreateAdminArgs,
): Promise<MutationCreateAdminArgs> => data;
