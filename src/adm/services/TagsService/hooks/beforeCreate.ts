import {Context} from '../../types';
import {
  ReliableTagCreateUserInput,
  StrictCreateTagArgs,
} from '../TagsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableTagCreateUserInput,
): Promise<StrictCreateTagArgs> => data;
