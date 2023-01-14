import {Client} from '@elastic/elasticsearch';
import {getConfig} from '../config';
import log from '../log';
import * as R from 'ramda';
import {AggregationsAggregate, CountResponse, SearchRequest, SearchResponse, SearchTotalHits, SortOrder} from '@elastic/elasticsearch/lib/api/types';
import {BulkStats} from '@elastic/elasticsearch/lib/helpers';
// import {SearchRequest} from '@elastic/elasticsearch/lib/api/typesWithBodyKey';

const uri = `http://${process.env.ELASTIC_URI as string}`;

export interface ElasticListArgs {
  sortField?: string,
  sortOrder?: SortOrder,
  filter?: Record<string, any>,
  page?: number,
  perPage?: number,
  search?: Record<string, any>,
}

export interface ElasticClient {
  client: Client;
  createSearcher: (index: string) => (args?: ElasticListArgs) => Promise<SearchResponse<unknown, Record<string, AggregationsAggregate>>>;
  createCounter: (index: string) => (args?: ElasticListArgs) => Promise<CountResponse>;
  createManyPutter: (index: string) => (
    dataset: Array<Record<string, any> & {id: string | number | bigint}>,
  ) => Promise<BulkStats>;
}

let elasticClient: ElasticClient | null = null;

export const getFullIndexName = async (index: string) => {
  const {appName, appEnvironment} = await getConfig();
  if (!appName || !appEnvironment) {
    throw new Error('appName and appEnvironment should be provided');
  }

  return `${appName}-${appEnvironment}-${index}`.toLowerCase();
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

  if (filter || search) {
    // if (filter?.ids) {
    //   const should = filter.ids.map((id: any) => ({term: {id}}));
    //   req.query = {
    //     bool: {
    //       should: [],
    //     },
    //   };
    // }

    const fieldsExceptIds = R.omit(['ids'], filter);

    req.query = {
      bool: {
        should: filter?.ids ?
          filter.ids.map((id: any) => ({term: {id}})) :
          [],
        filter: R.isEmpty(fieldsExceptIds) ?
          [] :
          R.toPairs(fieldsExceptIds).map(([key, value]: any) => ({
            term: {
              [typeof value === 'string' ? `${key}.keyword` : key]: value,
            },
          })),
        must: search ?
          R
            .toPairs(search)
            .map(([key, value]: [any, any]) => ({match_phrase_prefix: {[key]: {query: value}}})) :
          [],
      },
    };
  }

  if (perPage) {
    if (page) {
      req.from = (page - 1) * perPage;
    }

    req.size = perPage;
  }

  return req;
};

export const createElasticSearcher = (client: Client, index: string) => async (args?: ElasticListArgs) => {
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

  const listingConstaint = 10_000;

  // log.info('req after mapping');
  // log.info(JSON.stringify(req, null, 1));

  if (((req.from ?? 0) + (req.size ?? 0)) > listingConstaint) {
    req.from = listingConstaint - (req.size ?? 0);
  }

  return client.search(req);
};

export const createElasticCounter = (client: Client, index: string) => async (args?: ElasticListArgs) => {
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

export const createElasticManyPutter = (client: Client, index: string) => async (
  dataset: Array<Record<string, any> & {id: string | number | bigint}>,
) => {
  const fullIndexName = await getFullIndexName(index);

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
          createSearcher: (index: string) => createElasticSearcher(client, index),
          createCounter: (index: string) => createElasticCounter(client, index),
          createManyPutter: (index: string) => createElasticManyPutter(client, index),
        };
      }
    } else {
      const fake = () => {
        const reason = 'Elastic cannot be used with the es.enabled is not true!';
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

export const createElasticPutter = (index: string) => async (id: string, data: Record<string, any>) => {
  const client = await getElastic();

  return client.client.index({
    body: {
      ...data,
      // '@timestamp': new Date(),
    },
    id,
    index,
  });
};

export const createElasticDeleterByQuery = (index: string) => async () => {
  const client = await getElastic();
  const fullIndexName = await getFullIndexName(index);

  return client.client.deleteByQuery({
    index: fullIndexName,
    query: {
      match_all: {},
    },
  });
};

export const createElasticFilter = (index: string) => async (params?: object) => {
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

export const createUpdater = (index: string) => async (id: string, data: Record<string, any>) => {
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

export const createGetter = (index: string) => async (id: string) => {
  const client = await getElastic();

  return client.client.get({id, index});
};

export const search = async (index: string, params?: object, size = 500) => {
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

export const createLister = (index: string) => async (params: object = {}, size = 500) => {
  const res = await search(index, params, size);
  return (res)?.hits.hits as any[];
};

export const scroll = async (index: string) => {
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

export const handleEveryDoc = async (index: string, handler: (
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

export const elasticApp = async () => {
  log.info(123);
  log.info(`uri: ${uri}`);

  const index = 'adheart-teasers';

  const testindex3Putter = createElasticPutter(index);

  await testindex3Putter('555', {
    character: 'Daenerys Targaryen',
    quote: '888 I am the mother of dragons.',
  });

  const response = await search(index);
  log.info(`docs: ${response.fields}`);

  await handleEveryDoc(index, (_, i) => {
    log.info(`i: ${i}`);
  });

  log.info(7);
};
