import {
  MutationCreateUserArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
  data: MutationCreateUserArgs,
): Promise<MutationCreateUserArgs> => data;
