import {Context} from '../../types';
import {
  ReliableMatchRequestCreateUserInput,
  StrictCreateMatchRequestArgs,
} from '../MatchRequestsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMatchRequestCreateUserInput,
): Promise<StrictCreateMatchRequestArgs> => data;
