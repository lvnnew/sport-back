import {
  StrictUpdateTeamMatchReportArgs,
} from '../TeamMatchReportsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateTeamMatchReportArgs,
): Promise<StrictUpdateTeamMatchReportArgs> => data;
