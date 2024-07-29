import {Context} from '../../types';
import {
  StrictUpdateReportForParentArgs,
  StrictCreateReportForParentArgs,
  ReliableReportForParentCreateUserInput,
} from '../ReportForParentsService';

type InputData = {
  createData: ReliableReportForParentCreateUserInput,
  updateData: StrictUpdateReportForParentArgs,
};
type ReturnData = {
  createData: StrictCreateReportForParentArgs,
  updateData: StrictUpdateReportForParentArgs,
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
