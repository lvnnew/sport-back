import {Context} from '../../types';
import {MutationCreateMessageTemplateArgsWithAutoDefinable} from '../MessageTemplatesService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateMessageTemplateArgsWithAutoDefinable,
): Promise<MutationCreateMessageTemplateArgsWithAutoDefinable> => data;
