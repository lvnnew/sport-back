import {Context} from '../types';

export const getReports = (_ctx: Context) => ({});

export const getReportsMeta = (_ctx: Context) => ({});

export type Reports = ReturnType<typeof getReports>;

export type ReportCalcMethod = keyof Reports;

export type ReportsParams = Parameters<Reports[ReportCalcMethod]>;

export const methodToReportName: Record<ReportCalcMethod, string> = {};

class ReportsService {
  constructor(protected ctx: Context) {}
}

export default ReportsService;
