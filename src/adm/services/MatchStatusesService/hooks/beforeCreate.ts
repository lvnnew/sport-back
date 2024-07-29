import {Context} from '../../types';
import {
  ReliableMatchStatusCreateUserInput,
  StrictCreateMatchStatusArgs,
} from '../MatchStatusesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMatchStatusCreateUserInput,
): Promise<StrictCreateMatchStatusArgs> => data;
