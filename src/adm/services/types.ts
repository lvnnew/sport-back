import {PrismaClient} from '@prisma/client';
import {Knex} from 'knex';
import {Client} from 'pg';
import {WorkerUtils} from 'graphile-worker';
import {Logger} from 'winston';
import {AdditionalServices} from './AdditionalServices';
import {interfaces} from 'inversify/lib/interfaces/interfaces';
import {BaseServices} from './BaseServices';

export type Services = BaseServices & AdditionalServices;

export type Context = {
  prisma: PrismaClient;
  knex: Knex;
  postgres: Client;
  worker: WorkerUtils;
  log: Logger;
  close: () => Promise<void>;
  service: <N extends keyof Services>(name: N) => Services[N];
  container: interfaces.Container;
};

type ServiceConstrictor<T extends keyof Services> = (context: Context) => Services[T];

export type BaseServiceConstrictors = {
  [K in keyof BaseServices] : ServiceConstrictor<K>
};

export type AdditionalServiceConstrictors = {
  [K in keyof AdditionalServices] : ServiceConstrictor<K>
};

export type ServiceConstrictors = BaseServiceConstrictors & AdditionalServiceConstrictors;
