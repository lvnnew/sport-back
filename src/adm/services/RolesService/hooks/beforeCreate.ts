import {
  MutationCreateRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateRoleArgs,
): Promise<MutationCreateRoleArgs> => data;
