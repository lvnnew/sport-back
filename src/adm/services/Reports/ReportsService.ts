import {Context} from '../types';

export const getReports = (_ctx: Context) => ({});

export const getReportsMeta = (_ctx: Context) => ({});

export type Reports = ReturnType<typeof getReports>;

export type ReportCalcMethod = keyof Reports;

export type ReportsParams = Parameters<Reports[ReportCalcMethod]>;

export const methodToReportName: Record<ReportCalcMethod, string> = {};

export const getReportsService = (ctx: Context) => {
  const reports = getReports(ctx);

  return {
    ...reports,
    ...getReportsMeta(ctx),
  };
};

export type ReportsService = ReturnType<typeof getReportsService>;
