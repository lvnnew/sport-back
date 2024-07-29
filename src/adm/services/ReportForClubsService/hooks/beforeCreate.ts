import {Context} from '../../types';
import {
  ReliableReportForClubCreateUserInput,
  StrictCreateReportForClubArgs,
} from '../ReportForClubsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableReportForClubCreateUserInput,
): Promise<StrictCreateReportForClubArgs> => data;
