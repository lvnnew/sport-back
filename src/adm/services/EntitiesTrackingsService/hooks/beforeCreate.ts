import {Context} from '../../types';
import {
  ReliableEntitiesTrackingCreateUserInput,
  StrictCreateEntitiesTrackingArgs,
} from '../EntitiesTrackingsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableEntitiesTrackingCreateUserInput,
): Promise<StrictCreateEntitiesTrackingArgs> => data;
