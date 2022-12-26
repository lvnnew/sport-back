import {ConsumerRunConfig, EachBatchPayload, KafkaMessage} from 'kafkajs';

// read about config there docs/kafkaQueue.md
export type Config = {
  maxAttemptsSize: number;
  defaultRetryTime: number;
  waitingInterruptTime: number;
  stackSize: number;
  supportedVersion: string[];

  // producer config
  acks: 0 | 1 | -1;
};

export interface IHeaders {
  version: string;
  attempts: number; // attempts counter
  error?: string; // last error message
  // next fields just for waiting queue work
  callTime?: string; // date in integer
  retryTime?: string; // date range
  interruptMark?: string; // only used in the waiting queue to determine if the whole queue has been traversed.
}

export type Topics = 'main' | 'retry' | 'waiting' | 'dead';

export type TopicsConfig = Record<Topics, string>;
