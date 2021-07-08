import {
  MutationCreateUserArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateUserArgs,
): Promise<MutationCreateUserArgs> => data;
