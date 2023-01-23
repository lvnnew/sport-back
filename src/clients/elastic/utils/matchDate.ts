import dayjs from 'dayjs';

const matchDate = (
  field: string,
  date: Date,
  precision?: 'second' | 'hour' | 'day' | 'month' | 'year',
) => {
  if (precision) {
    return {
      range: {
        [field]: {
          gte: dayjs(date).startOf(precision).toDate(),
          lte: dayjs(date).endOf(precision).toDate(),
        },
      },
    };
  } else {
    return {
      match: {
        [field]: date.toISOString(),
      },
    };
  }
};

export default matchDate;
