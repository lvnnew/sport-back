import {Context} from '../../types';
import {
  ReliableReportForTeamCreateUserInput,
  StrictCreateReportForTeamArgs,
} from '../ReportForTeamsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableReportForTeamCreateUserInput,
): Promise<StrictCreateReportForTeamArgs> => data;
