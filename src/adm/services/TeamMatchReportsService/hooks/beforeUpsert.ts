import {Context} from '../../types';
import {
  StrictUpdateTeamMatchReportArgs,
  StrictCreateTeamMatchReportArgs,
  ReliableTeamMatchReportCreateUserInput,
} from '../TeamMatchReportsService';

type InputData = {
  createData: ReliableTeamMatchReportCreateUserInput,
  updateData: StrictUpdateTeamMatchReportArgs,
};
type ReturnData = {
  createData: StrictCreateTeamMatchReportArgs,
  updateData: StrictUpdateTeamMatchReportArgs,
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
