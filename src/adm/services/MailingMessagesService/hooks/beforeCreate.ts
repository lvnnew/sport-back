import {Context} from '../../types';
import {
  ReliableMailingMessageCreateUserInput,
  StrictCreateMailingMessageArgs,
} from '../MailingMessagesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMailingMessageCreateUserInput,
): Promise<StrictCreateMailingMessageArgs> => data;
