import dayjs from 'dayjs';

export const valueToString = (value: any): string => {
  if (value === 0) {
    return '0';
  }

  if (!value) {
    return '';
  }

  if (value instanceof Date) {
    return dayjs(value).format('DD.MM.YYYY').toString();
  }

  return value.toString();
};
