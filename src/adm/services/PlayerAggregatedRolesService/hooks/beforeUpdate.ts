import {
  StrictUpdatePlayerAggregatedRoleArgs,
} from '../PlayerAggregatedRolesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerAggregatedRoleArgs,
): Promise<StrictUpdatePlayerAggregatedRoleArgs> => data;
