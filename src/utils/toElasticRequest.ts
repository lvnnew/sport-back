import {SortOrder} from '@elastic/elasticsearch/lib/api/types';
import {ElasticListArgs} from '../clients/elastic';
import * as R from 'ramda';
// import log from '../log';

export const toElasticFilter = (filter: any): Record<string, any> | undefined => {
  if (!filter) {
    return undefined;
  }

  const elasticFilter = R.fromPairs(
    // R.toPairs(filter).filter(el => el[0] !== 'q' && el[0] !== 'ids' && el[1] !== null),
    R.toPairs(filter).filter(el => el[0] !== 'q' && el[1] !== null),
  );
  // if ('ids' in filter && !('id' in filter)) {
  //   elasticFilter.id = filter.ids;
  // }

  // log.info(JSON.stringify(filter, null, 1));
  // log.info(JSON.stringify(elasticFilter, null, 1));

  return elasticFilter;
};

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
    filter: toElasticFilter(filter),
    page: page ? page + 1 : undefined,
    perPage: perPage || 1000,
    search: filter?.q,
  };
  // log.info(JSON.stringify(result, null, 1));

  return result;
};
