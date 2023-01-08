import {KafkaJob} from './Job';

export type PayloadTypes = {
  [KafkaJob.Test]: {
    message: string;
    error?: boolean;
    randomError?: boolean;
    waiting?: number;
  };
};

export type JobType<key extends KafkaJob>
  = PayloadTypes[key] extends Record<string, unknown> ? (payload: PayloadTypes[key]) => Promise<any> : () => Promise<any>;

type ArrayOrNot<T> = T | T[];

export type QueueTypes = {
  [key in keyof PayloadTypes]: PayloadTypes[key] extends Record<string, unknown>
    ? (payload: ArrayOrNot<PayloadTypes[key]>) => Promise<any>
    : () => Promise<any>;
};
