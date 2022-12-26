import {KafkaJob} from '../clients/queue/Job';
import {Topics} from '../clients/kafka/queue/types';

export type TopicConfig = {
  partition?: Partial<Record<Exclude<Topics, 'waiting'>, number>>; // default 1 for partition
};

export type KafkaWorkerConfig = {
  jobs?: {
    [K in KafkaJob]?: TopicConfig | true;
  };
};

// eslint-disable-next-line @typescript-eslint/ban-types
export type GraphileWorkerConfig = {};

export type WorkerConfig = KafkaWorkerConfig & GraphileWorkerConfig;
