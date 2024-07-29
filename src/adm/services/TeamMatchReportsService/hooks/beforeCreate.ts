import {Context} from '../../types';
import {
  ReliableTeamMatchReportCreateUserInput,
  StrictCreateTeamMatchReportArgs,
} from '../TeamMatchReportsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableTeamMatchReportCreateUserInput,
): Promise<StrictCreateTeamMatchReportArgs> => data;
