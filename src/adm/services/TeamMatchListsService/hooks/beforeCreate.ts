import {Context} from '../../types';
import {
  ReliableTeamMatchListCreateUserInput,
  StrictCreateTeamMatchListArgs,
} from '../TeamMatchListsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableTeamMatchListCreateUserInput,
): Promise<StrictCreateTeamMatchListArgs> => data;
