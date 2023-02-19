import pdf from 'pdfjs';
import {capitalCase} from 'change-case';
import {WriteStream} from 'fs-extra';
import {valueToString} from '../valueToString';

const createPdfItemsTable = async <T extends Record<string, any>>(items: T[], stream: WriteStream) => {
  const doc = new pdf.Document();

  doc.pipe(stream);

  doc.footer().pageNumber(
    (curr: number, total: number) => {
      return curr + ' / ' + total;
    },
    {textAlign: 'center'},
  );

  doc
    .cell({paddingBottom: 0.5 * pdf.cm})
    .text();

  // .add('All items:');

  const widths: number[] = [];
  if (items[0]) {
    Object.keys(items[0]).forEach(() => {
      widths.push(0);
    });
  }

  const table = doc.table({
    borderHorizontalWidths: (i: number) => {
      return i < 2 ? 1 : 0.1;
    },
    padding: 5,
    widths,
  });

  const tr = table.header();

  if (items[0]) {
    Object.keys(items[0]).forEach((key) => {
      tr.cell(capitalCase(key));
    });
  }

  function addRow(items: T) {
    const tr = table.row();
    Object.keys(items).forEach((key) => {
      if (items[key]) {
        tr.cell(valueToString(items[key]));
      } else {
        tr.cell('');
      }
    });
  }

  items.forEach(addRow);

  await doc.end();
};

export default createPdfItemsTable;
