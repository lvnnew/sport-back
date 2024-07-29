import {Context} from '../../types';
import {
  ReliableReportForParentCreateUserInput,
  StrictCreateReportForParentArgs,
} from '../ReportForParentsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableReportForParentCreateUserInput,
): Promise<StrictCreateReportForParentArgs> => data;
