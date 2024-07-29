import {Context} from '../../types';
import {
  ReliableMatchCreateUserInput,
  StrictCreateMatchArgs,
} from '../MatchesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMatchCreateUserInput,
): Promise<StrictCreateMatchArgs> => data;
