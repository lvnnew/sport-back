import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export const clearDocsForPeriod = async (
  service: {
    all: (params: {
      filter: {
        date_gte: Date;
        date_lte: Date;
      };
    }) => Promise<Array<{id: number}>>;
    delete: (params: {
      id: number;
    }) => Promise<{id: number}>;
  },
  from: Date,
  to: Date,
) => {
  const docs = await service.all({
    filter: {
      date_gte: from,
      date_lte: to,
    },
  });
  for (const doc of docs) {
    await service.delete({id: doc.id});
  }
};
