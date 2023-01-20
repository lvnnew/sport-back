import {ValueBasedOnRequired} from './types';

const getConfigUtils = (
  getFromNconf: <T extends boolean>(name: string, required?: T) => ValueBasedOnRequired<T, string | number | boolean | Date>,
) => {
  const getStringConfig = <T extends boolean>(name: string, required: T): ValueBasedOnRequired<T, string> => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      if (required) {
        throw new Error(`Config var "${name}" is required`);
      }

      return value as any;
    }

    if (typeof value === 'string') {
      return value;
    }

    throw new Error(`Incorrect value. Value: "${value}", typeof: "${typeof value}"`);
  };

  const getIntConfig = <T extends boolean>(name: string, required: T): ValueBasedOnRequired<T, number> => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      if (required) {
        throw new Error(`Config var "${name}" is required`);
      }

      return value as any;
    }

    if (typeof value === 'number') {
      return value;
    }

    if (typeof value === 'string') {
      return Number(value);
    }

    throw new Error(`Incorrect value. Value: "${value}", typeof: "${typeof value}"`);
  };

  const getFloatConfig = getIntConfig;

  const getBigIntConfig = <T extends boolean>(name: string, required: T): ValueBasedOnRequired<T, bigint> => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      if (required) {
        throw new Error(`Config var "${name}" is required`);
      }

      return value as any;
    }

    if (typeof value === 'bigint') {
      return value;
    }

    if (typeof value === 'string') {
      return BigInt(value);
    }

    throw new Error(`Incorrect value. Value: "${value}", typeof: "${typeof value}"`);
  };

  const getDateTimeConfig = <T extends boolean>(name: string, required: T): ValueBasedOnRequired<T, Date> => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      if (required) {
        throw new Error(`Config var "${name}" is required`);
      }

      return value as any;
    }

    if (value instanceof Date) {
      return value;
    }

    if (typeof value === 'string') {
      return new Date(value);
    }

    throw new Error(`Incorrect value. Value: "${value}", typeof: "${typeof value}"`);
  };

  const getDateConfig = getDateTimeConfig;

  const getBooleanConfig = <T extends boolean>(name: string, required: T): ValueBasedOnRequired<T, boolean> => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      if (required) {
        throw new Error(`Config var "${name}" is required`);
      }

      return value as any;
    }

    if (typeof value === 'boolean') {
      return value;
    }

    if (typeof value === 'string') {
      return value.toLowerCase() === 'true';
    }

    throw new Error(`Incorrect value. Value: "${value}", typeof: "${typeof value}"`);
  };

  return {
    getStringConfig,
    getIntConfig,
    getFloatConfig,
    getBigIntConfig,
    getDateTimeConfig,
    getDateConfig,
    getBooleanConfig,
  };
};

export default getConfigUtils;
