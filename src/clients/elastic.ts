import {ApiResponse, Client} from '@elastic/elasticsearch';
import {getConfig} from '../config';
import log from '../log';
import * as R from 'ramda';

const uri = `http://${process.env.ELASTIC_URI as string}`;

let elasticClient: Client | null = null;

export const getElasticClient = async () => {
  if (!elasticClient) {
    const {esCloudId, esPassword, esUsername} = await getConfig();
    if (!esCloudId || !esPassword || !esUsername) {
      throw new Error('es creads is not provided');
    }

    elasticClient = new Client({
      auth: {
        password: esPassword,
        username: esUsername,
      },
      cloud: {
        id: esCloudId,
      },
    });
  }

  if (!elasticClient) {
    throw new Error('There is error while initializing elasticClient');
  }

  return elasticClient;
};

export const createElasticPutter = (index: string) => async (id: string, data: Record<string, any>) => {
  const client = await getElasticClient();

  return client.index({
    body: {
      ...data,
      '@timestamp': new Date(),
    },
    id,
    index,
  });
};

export const createUpdater = (index: string) => async (id: string, data: Record<string, any>) => {
  const client = await getElasticClient();
  const current = await client.get({id, index});

  return client.index({
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
  const client = await getElasticClient();

  return client.get({id, index});
};

export const search = async (index: string, params?: object, size = 500) => {
  const client = await getElasticClient();

  return client.search({
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
  const client = await getElasticClient();

  return client.search({
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
    const client = await getElasticClient();
    const {body} = responseQueue.shift() as ApiResponse<Record<string, any>, unknown>;

    // collect the titles from this response
    // body.hits.hits.forEach((hit: any) => {
    //   docs.push(hit._source);
    // });

    for (const doc of body.hits.hits) {
      await handler({
        id: doc._id,
        ...doc._source,
      }, handled + 1, body.hits.total.value);
      handled++;
    }

    // check to see if we have collected all of the quotes
    if (body.hits.total.value === handled) {
      log.info(`Every quote, ${handled}`);
      break;
    }

    // get the next response if there are more quotes to fetch
    responseQueue.push(
      await client.scroll({
        scroll: '30s',
        scroll_id: body._scroll_id,
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
