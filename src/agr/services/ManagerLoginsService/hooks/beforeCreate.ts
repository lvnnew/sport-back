import {
  MutationCreateManagerLoginArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
  data: MutationCreateManagerLoginArgs,
): Promise<MutationCreateManagerLoginArgs> => data;
