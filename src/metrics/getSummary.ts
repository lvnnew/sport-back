import {Summary} from 'prom-client';
import {name} from 'aws-sdk/clients/importexport';
import getAppEnvUnderscorePrefix from '../config/getAppEnvUnderscorePrefix';

const summaries: Map<name, Summary> = new Map();

const getSummary = async (name: string) => {
  if (!summaries.has(name)) {
    const prefix = await getAppEnvUnderscorePrefix();

    const metricName = (`${prefix}_${name}`);

    summaries.set(name, new Summary({
      name: metricName,
      help: metricName,
    // maxAgeSeconds: 600,
    // ageBuckets: 5,
    }));
  }

  return summaries.get(name) as Summary<string>;
};

export default getSummary;
