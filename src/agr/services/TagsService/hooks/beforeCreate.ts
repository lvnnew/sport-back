import {
  MutationCreateTagArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../context';

export const beforeCreate = async (
  _getCtx: () => AgrContext,
  data: MutationCreateTagArgs,
): Promise<MutationCreateTagArgs> => data;
