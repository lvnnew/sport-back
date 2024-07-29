import {Context} from '../../types';
import {
  ReliablePlayerAggregatedRoleCreateUserInput,
  StrictCreatePlayerAggregatedRoleArgs,
} from '../PlayerAggregatedRolesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerAggregatedRoleCreateUserInput,
): Promise<StrictCreatePlayerAggregatedRoleArgs> => data;
