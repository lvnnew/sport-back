import {
  StrictUpdateEntitiesTrackingArgs,
} from '../EntitiesTrackingsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateEntitiesTrackingArgs,
): Promise<StrictUpdateEntitiesTrackingArgs> => data;
