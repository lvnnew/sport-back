import {
  MutationUpdateAppLoginArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
  data: MutationUpdateAppLoginArgs,
): Promise<MutationUpdateAppLoginArgs> => data;
