import {
  MutationCreateAdminArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateAdminArgs,
): Promise<MutationCreateAdminArgs> => data;
