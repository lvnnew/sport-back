import {
  MutationCreateAppLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateAppLoginArgs,
): Promise<MutationCreateAppLoginArgs> => data;
