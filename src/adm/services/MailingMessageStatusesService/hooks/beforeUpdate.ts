import {
  StrictUpdateMailingMessageStatusArgs,
} from '../MailingMessageStatusesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMailingMessageStatusArgs,
): Promise<StrictUpdateMailingMessageStatusArgs> => data;
