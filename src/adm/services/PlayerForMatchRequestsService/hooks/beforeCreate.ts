import {Context} from '../../types';
import {
  ReliablePlayerForMatchRequestCreateUserInput,
  StrictCreatePlayerForMatchRequestArgs,
} from '../PlayerForMatchRequestsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliablePlayerForMatchRequestCreateUserInput,
): Promise<StrictCreatePlayerForMatchRequestArgs> => data;
