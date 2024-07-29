import {
  StrictUpdatePlayerForTeamMatchListArgs,
} from '../PlayerForTeamMatchListsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdatePlayerForTeamMatchListArgs,
): Promise<StrictUpdatePlayerForTeamMatchListArgs> => data;
