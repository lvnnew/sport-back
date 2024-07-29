import {Context} from '../../types';
import {
  ReliablePlayerForTeamMatchListCreateUserInput,
  StrictCreatePlayerForTeamMatchListArgs,
} from '../PlayerForTeamMatchListsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerForTeamMatchListCreateUserInput,
): Promise<StrictCreatePlayerForTeamMatchListArgs> => data;
