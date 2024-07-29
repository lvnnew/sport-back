import {
  StrictUpdateReportForOrganizationArgs,
} from '../ReportForOrganizationsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateReportForOrganizationArgs,
): Promise<StrictUpdateReportForOrganizationArgs> => data;
