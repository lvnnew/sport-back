import {Context} from '../../types';
import {
  ReliableEntityCreateUserInput,
  StrictCreateEntityArgs,
} from '../EntitiesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableEntityCreateUserInput,
): Promise<StrictCreateEntityArgs> => data;
