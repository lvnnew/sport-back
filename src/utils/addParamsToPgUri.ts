import * as R from 'ramda';

export const addParamsToDatabaseUri = (uri: string, params: Record<string, string>) => {
  const initDelimeter = uri.includes('?') ? '&' : '?';

  const filteredParams = R.fromPairs(
    R.toPairs(params)
      .filter(([key]) => !uri.includes(key)),
  );

  return uri + initDelimeter + R.toPairs(filteredParams).map(([key, val]) => `${key}=${val}`).join('&');
};
