import LRUCache from 'lru-cache';
import nconf from 'nconf';
import {constantCase, camelCase} from 'change-case';
import {exists, read} from 'fs-jetpack';

import {EnvVarConfig, EnvVarConfigBaseValues, EnvVarConfigValues} from './types';
import {getKnexByUri} from '../clients/knex/getKnexByUri';
import {envVarsConfig, Config} from './config';
import log from '../log';

export class ConfigUtils {
  private cache: LRUCache<'values' | 'config', any>;
  private baseConfig: EnvVarConfigBaseValues[] = [];
  private defaultConfig: Partial<Config> = {};

  constructor() {
    this.cache = new LRUCache({
      ttl: 30_000, // 30 sec
    });

    this.initBaseConfig();
  }

  initBaseConfig () {
    // initiating environment variables
    nconf.argv().env();

    this.baseConfig = envVarsConfig.map((conf) => ({
      ...conf,
      environment: ConfigUtils.parseValue(conf, ConfigUtils.getFromNconf(conf.id)),
    }));

    // initiating file variables
    nconf.file({file: './config/default.json'});

    const developerRunlifyConfig = read('runlify.developer.json', 'json') || 'dev';

    const envName = process.env.ENV || developerRunlifyConfig?.defaultEnvironment;
    const file = `./config/${envName}.json`;

    if (exists(file)) {
      nconf.file({file});
    }

    this.baseConfig = this.baseConfig.map((conf) => ({
      ...conf,
      file: ConfigUtils.parseValue(conf, ConfigUtils.getFromNconf(conf.id)),
    }));

    this.defaultConfig = {env: envName};
  }

  async updateFromDB (): Promise<Config> {
    const knexInstance = getKnexByUri(ConfigUtils.getFromNconf('database.main.write.uri'));

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const schema: string | null = knexInstance.schema?.client?.connectionSettings?.schema ?? 'public';

    let dbValues = {};

    try {
      const result = await knexInstance.raw(`select id, value from ${schema}."ConfigurationVariable";`);

      dbValues = result.rows.reduce((accum: Record<string, any>, {id, value}: {id: string, value: string}) => {
        try {
          accum[id] = JSON.parse(value);
        } catch {
          accum[id] = undefined;
          log.error(`Configuration variable with id: ${id} has an invalid value in DB: ${value}`);
        }

        return accum;
      }, {});
    } catch {
      log.error('Project has run without db configuration variables');
    }

    const values = this.baseConfig.map((conf) => {
      const db = ConfigUtils.parseValue(conf, dbValues[conf.id]);

      const resulted = db ?? conf.environment ?? conf.file;

      if (typeof resulted === 'undefined' && conf.required) {
        throw new Error(`Config var "${conf.id}" is required`);
      }

      return {
        ...conf,
        db,
        resulted,
      };
    });

    this.cache.set('values', values);

    const config = values.reduce((accum, v) => ({
      ...accum,
      [camelCase(v.id)]: v.db ?? v.environment ?? v.file,
    }), this.defaultConfig) as Config;

    this.cache.set('config', config);

    return config;
  }

  async getConfig (): Promise<Config> {
    if (this.cache.has('config')) {
      return this.cache.get('config') as Config;
    }

    return await this.updateFromDB();
  }

  private async getConfigValues () {
    if (!this.cache.has('values')) {
      await this.updateFromDB();
    }

    return this.cache.get('values') as EnvVarConfigValues[];
  }

  async getSafeConfig (): Promise<EnvVarConfigValues[]> {
    const config = await this.getConfigValues();

    return config.map(ConfigUtils.hideValue);
  }

  async getSafeVariable (id: string): Promise<EnvVarConfigValues | undefined> {
    const config = await this.getConfigValues();

    return config.find(el => el.id === id);
  }

  static getFromNconf = (id: string) => nconf.get(constantCase(id)) || nconf.get(id);

  static parseValue = (config: EnvVarConfig, value: string | undefined | Date) => {
    const getStringConfig = (): string | undefined => {
      if (typeof value === 'undefined') {
        return value as any;
      }

      if (typeof value === 'string') {
        return value;
      }

      throw new Error(
        `Incorrect value. Value: "${value}", typeof: "${typeof value}"`,
      );
    };

    const getIntConfig = (): number | undefined => {
      if (typeof value === 'undefined') {
        return value as any;
      }

      if (typeof value === 'number') {
        return value;
      }

      if (typeof value === 'string') {
        return Number(value);
      }

      throw new Error(
        `Incorrect value. Value: "${value}", typeof: "${typeof value}"`,
      );
    };

    const getFloatConfig = getIntConfig;

    const getBigIntConfig = (): bigint | undefined => {
      if (typeof value === 'undefined') {
        return value as any;
      }

      if (typeof value === 'bigint') {
        return value;
      }

      if (typeof value === 'string') {
        return BigInt(value);
      }

      throw new Error(
        `Incorrect value. Value: "${value}", typeof: "${typeof value}"`,
      );
    };

    const getDateTimeConfig = (): Date | undefined => {
      if (typeof value === 'undefined') {
        return value as any;
      }

      if (value instanceof Date) {
        return value;
      }

      if (typeof value === 'string') {
        // todo: check that date is a valid
        return new Date(value);
      }

      throw new Error(
        `Incorrect value. Value: "${value}", typeof: "${typeof value}"`,
      );
    };

    const getDateConfig = getDateTimeConfig;

    const getBooleanConfig = (): boolean | undefined => {
      if (typeof value === 'undefined') {
        return value as any;
      }

      if (typeof value === 'boolean') {
        return value;
      }

      if (typeof value === 'string') {
        return value.toLowerCase() === 'true';
      }

      throw new Error(
        `Incorrect value. Value: "${value}", typeof: "${typeof value}"`,
      );
    };

    switch (config.type) {
    case 'string':
      return getStringConfig();
    case 'int':
      return getIntConfig();
    case 'float':
      return getFloatConfig();
    case 'bigint':
      return getBigIntConfig();
    case 'datetime':
      return getDateTimeConfig();
    case 'date':
      return getDateConfig();
    case 'bool':
      return getBooleanConfig();
    default:
      throw new Error('Invalid config variable type');
    }
  };

  static hideValue (val: EnvVarConfigValues): EnvVarConfigValues {
    const hidden = '********';

    if (val.hidden) {
      return {
        ...val,
        environment: hidden,
        file: hidden,
        db: hidden,
        resulted: hidden,
      };
    }

    return val;
  }
}
