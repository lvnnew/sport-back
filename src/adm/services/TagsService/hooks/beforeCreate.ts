import {
  MutationCreateTagArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateTagArgs,
): Promise<MutationCreateTagArgs> => data;
