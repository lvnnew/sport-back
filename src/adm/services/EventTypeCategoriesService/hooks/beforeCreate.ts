import {Context} from '../../types';
import {
  ReliableEventTypeCategoryCreateUserInput,
  StrictCreateEventTypeCategoryArgs,
} from '../EventTypeCategoriesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableEventTypeCategoryCreateUserInput,
): Promise<StrictCreateEventTypeCategoryArgs> => data;
