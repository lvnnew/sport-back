import {Summary} from 'prom-client';
import {name} from 'aws-sdk/clients/importexport';
import getAppEnvUnderscorePrefix from '../config/getAppEnvUnderscorePrefix';

const summaries: Map<name, Summary> = new Map();

const getSummary = async (name: string) => {
  if (!summaries.has(name)) {
    const prefix = await getAppEnvUnderscorePrefix();
    summaries.set(name, new Summary({
      name: `${prefix}_graph_${name}`,
      help: `graph_${name}`,
    // maxAgeSeconds: 600,
    // ageBuckets: 5,
    }));
  }

  return summaries.get(name) as Summary<string>;
};

export default getSummary;
