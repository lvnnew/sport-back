import * as xlsx from 'xlsx';
import path from 'path';
import {capitalCase} from 'change-case';
import {valueToString} from '../valueToString';

const exportExcel = (data: string[][], workSheetColumnNames: string[], workSheetName: string, filePath: string) => {
  const workBook = xlsx.utils.book_new();
  const workSheetData = [
    workSheetColumnNames,
    ...data,
  ];

  const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
  xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
  xlsx.writeFile(workBook, path.resolve(filePath));
};

const exportDataToExcel = <T extends Record<string, any>>(items: T[], workSheetName: string, filePath: string) => {
  const data = items.map((item: any) => {
    const result: any[] = [];

    Object.values(item).forEach((value) => {
      result.push(valueToString(value));
    });

    return result;
  });

  const workSheetColumnNames: string[] = [];
  Object.keys(items[0]).forEach((key) => {
    workSheetColumnNames.push(capitalCase(key));
  });

  exportExcel(data, workSheetColumnNames, workSheetName, filePath);
};

export default exportDataToExcel;
