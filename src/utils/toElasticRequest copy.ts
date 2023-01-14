import {SortOrder} from '@elastic/elasticsearch/lib/api/types';
import {ElasticListArgs} from '../clients/elastic';
import * as R from 'ramda';
import log from '../log';

export const toElasticRequest = ({
  page,
  perPage,
  sortField,
  sortOrder,
  filter,
}: any): ElasticListArgs => {
  const result = {
    sortField: sortField || undefined,
    sortOrder: (sortOrder && sortOrder.toUpperCase() === 'DESC' ? 'desc' : 'asc') as SortOrder,
    filter: filter ? R.fromPairs(R.toPairs(filter).filter(el => el[0] !== 'q' && el[1] !== null)) : undefined,
    page: page ? page + 1 : undefined,
    perPage: perPage || 1000,
    search: filter?.q ? {search: filter?.q} : undefined,
  };
  log.info(JSON.stringify(result, null, 1));

  return result;
};
