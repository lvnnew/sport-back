import {Context} from '../../types';
import {
  ReliableWscMessageCreateUserInput,
  StrictCreateWscMessageArgs,
} from '../WscMessagesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableWscMessageCreateUserInput,
): Promise<StrictCreateWscMessageArgs> => data;
