const getConfigUtils = (getFromNconf: (name: string, required: boolean) => string | undefined) => {
  const getStringConfig = (name: string, required: boolean) => getFromNconf(name, required);

  const getIntConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    return (value ? Number(value) : undefined);
  };

  const getFloatConfig = getIntConfig;

  const getBigIntConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    return (value ? BigInt(value) : undefined);
  };

  const getDateTimeConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    return (value ? new Date(value) : undefined);
  };

  const getDateConfig = getDateTimeConfig;

  const getBooleanConfig = (name: string, required: boolean) => {
    const value = getFromNconf(name, required);

    return (value ? value.toLowerCase() === 'true' : undefined);
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
