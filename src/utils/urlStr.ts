import {fromPairs, toPairs} from 'lodash';
import qs from 'qs';

export const urlStr = (params: any): string => {
  const filteredParams = fromPairs(
    toPairs(params).filter(
      ([, value]) => Boolean(value) || value === 0 || typeof value === 'boolean',
    ),
  );

  return qs.stringify(filteredParams, {
    arrayFormat: 'repeat',
  });
};
