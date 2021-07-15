import {
  MutationCreateManagerLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateManagerLoginArgs,
): Promise<MutationCreateManagerLoginArgs> => data;
