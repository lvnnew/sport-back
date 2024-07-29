import {Context} from '../../types';
import {
  ReliableEventTypeCreateUserInput,
  StrictCreateEventTypeArgs,
} from '../EventTypesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableEventTypeCreateUserInput,
): Promise<StrictCreateEventTypeArgs> => data;
