import {
  StrictUpdateReportForTeamArgs,
} from '../ReportForTeamsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateReportForTeamArgs,
): Promise<StrictUpdateReportForTeamArgs> => data;
