import {Context} from '../../types';
import {
  StrictUpdateReportForOrganizationArgs,
  StrictCreateReportForOrganizationArgs,
  ReliableReportForOrganizationCreateUserInput,
} from '../ReportForOrganizationsService';

type InputData = {
  createData: ReliableReportForOrganizationCreateUserInput,
  updateData: StrictUpdateReportForOrganizationArgs,
};
type ReturnData = {
  createData: StrictCreateReportForOrganizationArgs,
  updateData: StrictUpdateReportForOrganizationArgs,
};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: InputData,
): Promise<ReturnData> => {
  return {
    createData,
    updateData,
  };
};
