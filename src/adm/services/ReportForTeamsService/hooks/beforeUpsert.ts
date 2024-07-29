import {Context} from '../../types';
import {
  StrictUpdateReportForTeamArgs,
  StrictCreateReportForTeamArgs,
  ReliableReportForTeamCreateUserInput,
} from '../ReportForTeamsService';

type InputData = {
  createData: ReliableReportForTeamCreateUserInput,
  updateData: StrictUpdateReportForTeamArgs,
};
type ReturnData = {
  createData: StrictCreateReportForTeamArgs,
  updateData: StrictUpdateReportForTeamArgs,
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
