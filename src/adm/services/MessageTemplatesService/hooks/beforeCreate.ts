import {
  MutationCreateMessageTemplateArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeCreate = async (
  _getCtx: () => Context,
  data: MutationCreateMessageTemplateArgs,
): Promise<MutationCreateMessageTemplateArgs> => data;
