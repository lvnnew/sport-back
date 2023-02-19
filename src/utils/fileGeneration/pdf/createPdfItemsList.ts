import pdf from 'pdfjs';
import {capitalCase} from 'change-case';
import {WriteStream} from 'fs-extra';
import {valueToString} from '../valueToString';

const createPdfItemsList = async <T extends Record<string, any>>(items: T[], stream: WriteStream) => {
  const doc = new pdf.Document();

  doc.pipe(stream);

  doc.footer().pageNumber(
    (curr: number, total: number) => {
      return curr + ' / ' + total;
    },
    {textAlign: 'center'},
  );

  items.forEach(item => {
    for (const [key, value] of Object.entries(item)) {
      doc
        .text()
        .add(`${capitalCase(key)}: ${valueToString(value)}`);
    }

    doc
      .cell({paddingBottom: 0.5 * pdf.cm});
  });

  await doc.end();
};

export default createPdfItemsList;
