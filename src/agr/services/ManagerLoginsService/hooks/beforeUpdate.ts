import {
  MutationUpdateManagerLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateManagerLoginArgs,
): Promise<MutationUpdateManagerLoginArgs> => data;
