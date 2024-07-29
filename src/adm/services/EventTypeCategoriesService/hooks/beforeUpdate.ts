import {
  StrictUpdateEventTypeCategoryArgs,
} from '../EventTypeCategoriesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateEventTypeCategoryArgs,
): Promise<StrictUpdateEventTypeCategoryArgs> => data;
