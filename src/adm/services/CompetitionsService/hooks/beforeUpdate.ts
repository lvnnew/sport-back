import {
  StrictUpdateCompetitionArgs,
} from '../CompetitionsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateCompetitionArgs,
): Promise<StrictUpdateCompetitionArgs> => data;
