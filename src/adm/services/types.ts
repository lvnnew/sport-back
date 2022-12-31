import {PrismaClient} from '@prisma/client';
import {Knex} from 'knex';
import {Client} from 'pg';
import {WorkerUtils} from 'graphile-worker';
import {AdditionalServices} from './AdditionalServices';
import {interfaces} from 'inversify/lib/interfaces/interfaces';
import {BaseServices} from './BaseServices';
import {KafkaContext} from '../../clients/kafka/getKafkaContext';
import {QueueTypes} from '../../clients/queue/jobsTypes';
import {ElasticClient} from '../../clients/elastic';
import {Logger} from '../../log';

export type Services = BaseServices & AdditionalServices;

export type Context = {
  prisma: PrismaClient;
  knex: Knex;
  postgres: Client;
  worker: WorkerUtils;
  elastic: ElasticClient;
  log: Logger;
  close: () => Promise<void>;
  service: <N extends keyof Services>(name: N) => Services[N];
  container: interfaces.Container;
  kafka: KafkaContext;
  queue: QueueTypes;
};

export interface ServiceConfig {
  idType: 'string' | 'bigint' | 'int';
  autogeneratedStringId: boolean;
  auditable: boolean;
  entityTypeId: string; // used for auditable table
  withSearch: boolean;
  externalSearch: boolean;
  dateFields: string[];
  otherFields: string[];
  forbiddenForUserFields: string[];
}

export interface DocumentConfig extends ServiceConfig {
  registries: string[];
  registrarTypeId: string;
}

type ServiceConstrictor<T extends keyof Services> = (context: Context) => Services[T];

export type BaseServiceConstrictors = {
  [K in keyof BaseServices] : ServiceConstrictor<K>
};

export type AdditionalServiceConstrictors = {
  [K in keyof AdditionalServices] : ServiceConstrictor<K>
};

export type ServiceConstrictors = BaseServiceConstrictors & AdditionalServiceConstrictors;
