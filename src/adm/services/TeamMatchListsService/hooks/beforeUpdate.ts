import {
  StrictUpdateTeamMatchListArgs,
} from '../TeamMatchListsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateTeamMatchListArgs,
): Promise<StrictUpdateTeamMatchListArgs> => data;
