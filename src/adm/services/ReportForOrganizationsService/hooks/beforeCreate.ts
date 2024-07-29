import {Context} from '../../types';
import {
  ReliableReportForOrganizationCreateUserInput,
  StrictCreateReportForOrganizationArgs,
} from '../ReportForOrganizationsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableReportForOrganizationCreateUserInput,
): Promise<StrictCreateReportForOrganizationArgs> => data;
