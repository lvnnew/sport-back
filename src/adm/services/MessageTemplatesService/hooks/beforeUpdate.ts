import {
  MutationUpdateMessageTemplateArgs,
} from '../../../../generated/graphql';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: MutationUpdateMessageTemplateArgs,
): Promise<MutationUpdateMessageTemplateArgs> => data;
