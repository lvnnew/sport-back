import {Context} from '../../types';
import {
  ReliableEventCreateUserInput,
  StrictCreateEventArgs,
} from '../EventsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableEventCreateUserInput,
): Promise<StrictCreateEventArgs> => data;
