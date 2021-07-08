import {
  MutationUpdateManagerLoginArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => AgrContext,
  data: MutationUpdateManagerLoginArgs,
): Promise<MutationUpdateManagerLoginArgs> => data;
