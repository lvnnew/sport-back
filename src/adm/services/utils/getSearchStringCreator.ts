import * as R from 'ramda';
import dayjs from 'dayjs';

const getSearchStringCreator = (dateFields: string[], otherFields: string[]) => (entry: Record<string, any>) => [
  ...R
    .toPairs(R.pick(otherFields, entry))
    .map((el) => (el[1] as any)?.toString()?.toLowerCase() ?? ''),
  ...R
    .toPairs(R.pick(dateFields, entry))
    .map((el) => dayjs(el[1] as Date).utc().format('DD.MM.YYYY') ?? ''),
].join(' ');

export default getSearchStringCreator;
