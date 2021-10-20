import {
  MutationUpdateMessageTemplateArgs,
} from '../../../../generated/graphql';
import {Context} from '../../context';

export const beforeUpdate = async (
  _getCtx: () => Context,
  data: MutationUpdateMessageTemplateArgs,
): Promise<MutationUpdateMessageTemplateArgs> => data;
