import {
  MutationUpdateAppLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateAppLoginArgs,
): Promise<MutationUpdateAppLoginArgs> => data;
