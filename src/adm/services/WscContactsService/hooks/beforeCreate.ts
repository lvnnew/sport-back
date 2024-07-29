import {Context} from '../../types';
import {
  ReliableWscContactCreateUserInput,
  StrictCreateWscContactArgs,
} from '../WscContactsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableWscContactCreateUserInput,
): Promise<StrictCreateWscContactArgs> => data;
