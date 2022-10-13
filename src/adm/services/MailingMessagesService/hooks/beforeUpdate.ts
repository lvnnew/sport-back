import {
  StrictUpdateMailingMessageArgs,
} from '../MailingMessagesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMailingMessageArgs,
): Promise<StrictUpdateMailingMessageArgs> => data;
