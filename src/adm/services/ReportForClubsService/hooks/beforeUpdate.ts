import {
  StrictUpdateReportForClubArgs,
} from '../ReportForClubsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateReportForClubArgs,
): Promise<StrictUpdateReportForClubArgs> => data;
