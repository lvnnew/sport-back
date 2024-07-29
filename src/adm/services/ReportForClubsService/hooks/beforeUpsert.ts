import {Context} from '../../types';
import {
  StrictUpdateReportForClubArgs,
  StrictCreateReportForClubArgs,
  ReliableReportForClubCreateUserInput,
} from '../ReportForClubsService';

type InputData = {
  createData: ReliableReportForClubCreateUserInput,
  updateData: StrictUpdateReportForClubArgs,
};
type ReturnData = {
  createData: StrictCreateReportForClubArgs,
  updateData: StrictUpdateReportForClubArgs,
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
