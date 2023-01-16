const getConfigUtils = (getFromNconf: (name: string, required: boolean) => string | number | boolean | Date | undefined) => {
  const getStringConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      return value;
    }

    if (typeof value === 'string') {
      return value;
    }

    throw new Error(`Incorrect value. Value: "${value}", typeof: "${typeof value}"`);
  };

  const getIntConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      return value;
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

  const getBigIntConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      return value;
    }

    if (typeof value === 'bigint') {
      return value;
    }

    if (typeof value === 'string') {
      return BigInt(value);
    }

    throw new Error(`Incorrect value. Value: "${value}", typeof: "${typeof value}"`);
  };

  const getDateTimeConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      return value;
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

  const getBooleanConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    if (typeof value === 'undefined') {
      return value;
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
