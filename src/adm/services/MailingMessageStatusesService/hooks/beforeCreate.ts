import {Context} from '../../types';
import {
  ReliableMailingMessageStatusCreateUserInput,
  StrictCreateMailingMessageStatusArgs,
} from '../MailingMessageStatusesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMailingMessageStatusCreateUserInput,
): Promise<StrictCreateMailingMessageStatusArgs> => data;
