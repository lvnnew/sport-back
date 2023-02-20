import {Client} from '@elastic/elasticsearch';
import {getConfig} from '../../config';
import log from '../../log';
import * as R from 'ramda';
import {
  AggregationsAggregate,
  BulkResponse,
  CountResponse,
  QueryDslQueryContainer,
  SearchRequest,
  SearchResponse,
  SearchTotalHits,
  SortOrder,
} from '@elastic/elasticsearch/lib/api/types';
import {BulkStats} from '@elastic/elasticsearch/lib/helpers';
import Entity from '../../types/Entity';
import {snakeCase} from 'change-case';

export type ElasticIndexes = Entity/* | AdditionalIndex*/;

export interface ElasticListArgs {
  sortField?: string,
  sortOrder?: SortOrder,
  filter?: Record<string, any>,
  page?: number,
  perPage?: number,
  search?: string,
}

type ID = string | number | bigint;

export interface ElasticClient {
  client: Client;
  createSearcher: (index: ElasticIndexes) =>
    (args?: ElasticListArgs) => Promise<SearchResponse<unknown, Record<string, AggregationsAggregate>>>;
  createCounter: (index: ElasticIndexes) => (args?: ElasticListArgs) => Promise<CountResponse>;
  createManyPutter: (index: ElasticIndexes) => (
    dataset: Array<Record<string, any> & {id: string | number | bigint}>,
  ) => Promise<BulkStats | undefined>;
  deleteById: (index: ElasticIndexes, id: ID | ID[]) => Promise<BulkResponse | null>;
}

let elasticClient: ElasticClient | null = null;

export const getFullIndexName = async (index: ElasticIndexes) => {
  const {appName, appEnvironment} = await getConfig();
  if (!appName || !appEnvironment) {
    throw new Error('appName and appEnvironment should be provided');
  }

  return `${appName}-${appEnvironment}-${snakeCase(index as string)}`;
};

const fillInParams = ({
  sortField,
  sortOrder,
  filter,
  page,
  perPage,
  search,
}: ElasticListArgs) => {
  const req: SearchRequest = {};
  if (sortField) {
    req.sort = [{[sortField]: {order: sortOrder ?? 'asc'}}] as any;
  }

  const elasticFilter: QueryDslQueryContainer | QueryDslQueryContainer[] = [];
  const must: QueryDslQueryContainer | QueryDslQueryContainer[] = [];

  if (search) {
    must.push(
      ...(search ?
        [{
          query_string: {
            query: `${search}*`,
            analyze_wildcard: true,
          },
        }] : []));
  }

  if (filter) {
    const plainFields = R.fromPairs(
      R.toPairs(filter)
        .filter((
          [key]) => key !== 'ids' &&
            !key.endsWith('_in') &&
            !key.endsWith('_lt') &&
            !key.endsWith('_lte') &&
            !key.endsWith('_gt') &&
            !key.endsWith('_gte'),
        ),
    );

    elasticFilter.push(
      ...(
        R.isEmpty(plainFields) ?
          [] :
          R.toPairs(plainFields).map(([key, value]: any) => ({
            term: {
              // [typeof value === 'string' ? `${key}.keyword` : key]: value,
              [key]: value,
            },
          }))
      ),
    );

    if ('ids' in filter) {
      const ids: Array<string | number | bigint> = filter.ids;
      elasticFilter.push({
        bool: {
          should: ids.map(id => ({
            term: {
              id,
            },
          })),
          minimum_should_match: 1,
        },
      });
    }

    const inFields = R.toPairs(filter).filter(([key]) => key.endsWith('_in'));
    if (inFields.length) {
      for (const [key, values] of inFields) {
        elasticFilter.push({
          bool: {
            should: (values as any[]).map(value => ({
              term: {
                [key.replaceAll('_in', '')]: value,
              },
            })),
            minimum_should_match: 1,
          },
        });
      }
    }

    const gteFields = R.toPairs(filter).filter(([key]) => key.endsWith('_gte'));
    if (gteFields.length) {
      for (const [key, value] of gteFields) {
        elasticFilter.push({
          range: {
            [key.replaceAll('_gte', '')]: {
              gte: value,
            },
          },
        });
      }
    }

    const gtFields = R.toPairs(filter).filter(([key]) => key.endsWith('_gt'));
    if (gtFields.length) {
      for (const [key, value] of gtFields) {
        elasticFilter.push({
          range: {
            [key.replaceAll('_gt', '')]: {
              gt: value,
            },
          },
        });
      }
    }

    const lteFields = R.toPairs(filter).filter(([key]) => key.endsWith('_lte'));
    if (lteFields.length) {
      for (const [key, value] of lteFields) {
        elasticFilter.push({
          range: {
            [key.replaceAll('_lte', '')]: {
              lte: value,
            },
          },
        });
      }
    }

    const ltFields = R.toPairs(filter).filter(([key]) => key.endsWith('_lt'));
    if (ltFields.length) {
      for (const [key, value] of ltFields) {
        elasticFilter.push({
          range: {
            [key.replaceAll('_lt', '')]: {
              lt: value,
            },
          },
        });
      }
    }
  }

  req.query = {
    bool: {
      filter: elasticFilter,
      must,
    },
  };

  if (perPage) {
    if (page) {
      req.from = (page - 1) * perPage;
    }

    req.size = perPage;
  }

  return req;
};

export const createElasticSearcher = (client: Client, index: ElasticIndexes) => async (args?: ElasticListArgs) => {
  let req: SearchRequest = {
    index: await getFullIndexName(index),
  };

  if (args) {
    const {
      sortField,
      sortOrder,
      filter,
      page,
      perPage,
      search,
    } = args;

    req = {
      ...req,
      ...fillInParams({
        sortField,
        sortOrder,
        filter,
        page,
        perPage,
        search,
      }),
    };
  }

  // log.info('query');
  // log.info(JSON.stringify(req.query, null, 1));

  const listingConstraint = 10_000;

  // log.info('req after mapping');
  // log.info(JSON.stringify(req, null, 1));

  if (((req.from ?? 0) + (req.size ?? 0)) > listingConstraint) {
    req.from = listingConstraint - (req.size ?? 0);
  }

  return client.search(req);
};

export const createElasticCounter = (client: Client, index: ElasticIndexes) => async (args?: ElasticListArgs) => {
  let req: SearchRequest = {
    index: await getFullIndexName(index),
  };

  if (args) {
    const {
      sortField,
      sortOrder,
      filter,
      page,
      search,
    } = args;

    req = {
      ...req,
      ...fillInParams({
        sortField,
        sortOrder,
        filter,
        page,
        search,
      }),
    };
  }

  return client.count(req);
};

export const createElasticManyPutter = (client: Client, index: ElasticIndexes) => async (
  dataset: Array<Record<string, any> & {id: string | number | bigint}>,
) => {
  const fullIndexName = await getFullIndexName(index);
  // log.info(`fullIndexName: ${fullIndexName}`);

  if (dataset.length === 0) {
    return;
  }

  return client.helpers.bulk({
    datasource: dataset,
    onDocument (doc: any) {
      return [
        {
          update: {
            _index: fullIndexName,
            _id: doc.id.toString(),
          },
        },
        {doc_as_upsert: true},
      ];
    },
    refresh: 'wait_for',
  });
};

export const getElastic = async () => {
  if (!elasticClient) {
    const {
      esEnabled,
      esCloudId,
      esPassword,
      esUsername,
      esNode,
      esTlsRejectUnauthorized,
    } = await getConfig();

    if (esEnabled) {
      if ((!esCloudId || !esPassword || !esUsername) && !esNode) {
        throw new Error('Not enought credentials for es');
      }

      let client: Client;
      if (esNode) {
        client = new Client({
          node: esNode,
          auth: esPassword && esUsername ? {
            password: esPassword,
            username: esUsername,
          } : undefined,
          tls: {
            rejectUnauthorized: esTlsRejectUnauthorized,
          },
        });
      } else {
        client = new Client({
          auth: {
            password: esPassword as string,
            username: esUsername as string,
          },
          cloud: {
            id: esCloudId as string,
          },
        });
      }

      if (!elasticClient) {
        elasticClient = {
          client,
          deleteById: async (indexPrefix: ElasticIndexes, id) => {
            const index = await getFullIndexName(indexPrefix);

            const ids = Array.isArray(id) ? id : [id];

            if (ids.length === 0) {
              return null;
            }

            log.info(`Deleting from elastic: ${index} ${ids.join(', ')}`);

            return await client.bulk({
              index,
              body: ids.map(id => ({
                delete: {
                  _id: id.toString(),
                  _index: index,
                },
              })),
            });
          },
          createSearcher: (index: ElasticIndexes) => createElasticSearcher(client, index),
          createCounter: (index: ElasticIndexes) => createElasticCounter(client, index),
          createManyPutter: (index: ElasticIndexes) => createElasticManyPutter(client, index),
        };
      }
    } else {
      const fake = () => {
        const reason = 'Elastic cannot be used with the es.enabled is not true';
        log.error(reason);
        return Promise.reject(reason);
      };

      return {
        client: null,
        createSearcher: fake,
        createCounter: fake,
        createManyPutter: fake,
      } as any as ElasticClient;
    }
  }

  if (!elasticClient) {
    throw new Error('There is error while initializing elasticClient');
  }

  return elasticClient;
};

export const createElasticPutter = (index: Entity) => async (id: string, data: Record<string, any>) => {
  const client = await getElastic();

  return client.client.index({
    body: {
      ...data,
      // '@timestamp': new Date(),
    },
    id,
    index,
    refresh: 'wait_for',
  });
};

export const createElasticDeleterByQuery = (index: ElasticIndexes) => async () => {
  const client = await getElastic();
  const fullIndexName = await getFullIndexName(index);

  return client.client.deleteByQuery({
    index: fullIndexName,
    query: {
      match_all: {},
    },
  });
};

export const createElasticFilter = (index: Entity) => async (params?: object) => {
  const client = await getElastic();

  return await client.client.search({
    index,
    body: {
      query: {
        bool: {
          filter: [
            {
              term: params,
            },
          ],
        },
      },
    },
  });
};

export const createUpdater = (index: Entity) => async (id: string, data: Record<string, any>) => {
  const client = await getElastic();
  const current = await client.client.get({id, index});

  return client.client.index({
    body: {
      ...current?.fields?._source,
      '@updated': new Date(),
      ...data,
    },
    id,
    index,
    refresh: 'wait_for',
  });
};

export const createGetter = (index: Entity) => async (id: string) => {
  const client = await getElastic();

  return client.client.get({id, index});
};

export const search = async (index: Entity, params?: object, size = 500) => {
  const client = await getElastic();

  return client.client.search({
    body: {
      query: {
        bool: {
          must: params ?
            R
              .toPairs(params)
              .map(([key, value]: [any, any]) => ({match_phrase: {[key]: {query: value}}})) :
            [],
        // match: params ? objectToQuery(params) : {},
        },
      },
    },
    index,

    // scroll: '30s',
    size,
  });
};

export const createLister = (index: Entity) => async (params: object = {}, size = 500) => {
  const res = await search(index, params, size);
  return (res)?.hits.hits as any[];
};

export const scroll = async (index: Entity) => {
  const client = await getElastic();

  return client.client.search({
    body: {
      query: {
        match_all: {},
      },
    },
    index,
    scroll: '1m',
    size: 10000,
  });
};

export const handleEveryDoc = async (index: Entity, handler: (
  doc: any,
  index: number,
  total: number
) => Promise<void> | void) => {
  // const index = 'adheart-teasers';

  const response = await scroll(index);

  let handled = 0;
  const responseQueue = [];
  responseQueue.push(response);

  while (responseQueue.length) {
    const client = await getElastic();
    const {hits, _scroll_id} = responseQueue.shift() as SearchResponse<Record<string, any>, unknown>;

    // collect the titles from this response
    // body.hits.hits.forEach((hit: any) => {
    //   docs.push(hit._source);
    // });

    const total = (hits?.total as SearchTotalHits)?.value ? (hits?.total as SearchTotalHits)?.value : hits?.total as number;

    for (const doc of hits.hits) {
      await handler(
        {
          id: doc._id,
          ...doc._source,
        },
        handled + 1,
        total,
      );
      handled++;
    }

    // check to see if we have collected all of the quotes
    if (total === handled) {
      log.info(`Every quote, ${handled}`);
      break;
    }

    // get the next response if there are more quotes to fetch
    responseQueue.push(
      await client.client.scroll({
        scroll: '30s',
        scroll_id: _scroll_id,
      }),
    );
  }
};
