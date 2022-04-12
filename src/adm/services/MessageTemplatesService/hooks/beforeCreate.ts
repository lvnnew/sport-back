import {Context} from '../../types';
import {
  ReliableMessageTemplateCreateUserInput,
  StrictCreateMessageTemplateArgs,
} from '../MessageTemplatesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMessageTemplateCreateUserInput,
): Promise<StrictCreateMessageTemplateArgs> => data;
