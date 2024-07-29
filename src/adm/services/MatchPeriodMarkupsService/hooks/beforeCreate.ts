import {Context} from '../../types';
import {
  ReliableMatchPeriodMarkupCreateUserInput,
  StrictCreateMatchPeriodMarkupArgs,
} from '../MatchPeriodMarkupsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMatchPeriodMarkupCreateUserInput,
): Promise<StrictCreateMatchPeriodMarkupArgs> => data;
