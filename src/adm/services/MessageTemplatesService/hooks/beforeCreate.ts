import {
  MutationCreateMessageTemplateArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateMessageTemplateArgs,
): Promise<MutationCreateMessageTemplateArgs> => data;
