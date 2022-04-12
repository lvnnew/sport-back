import {Context} from '../../types';
import {
  ReliableMessageTypeCreateUserInput,
  StrictCreateMessageTypeArgs,
} from '../MessageTypesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMessageTypeCreateUserInput,
): Promise<StrictCreateMessageTypeArgs> => data;
