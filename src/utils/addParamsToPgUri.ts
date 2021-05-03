/* eslint-disable sort-keys-fix/sort-keys-fix */
import {toPairs} from 'ramda';

export const addParamsToPgUri = (uri: string, params: Record<string, string>) => {
  const initDelimeter = uri.includes('?') ? '&' : '?';

  return uri + initDelimeter + toPairs(params).map(([key, val]) => `${key}=${val}`).join('&');
};
