import {
  MutationCreateAppLoginArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
  data: MutationCreateAppLoginArgs,
): Promise<MutationCreateAppLoginArgs> => data;
