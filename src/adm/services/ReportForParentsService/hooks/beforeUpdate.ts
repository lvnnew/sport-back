import {
  StrictUpdateReportForParentArgs,
} from '../ReportForParentsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateReportForParentArgs,
): Promise<StrictUpdateReportForParentArgs> => data;
