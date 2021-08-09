import qs from 'qs';
import * as R from 'ramda';

export const urlStr = (params: any): string => {
  const filteredParams = R.fromPairs(
    R.toPairs(params).filter(
      ([, value]) => Boolean(value) || value === 0 || typeof value === 'boolean',
    ),
  );

  return qs.stringify(filteredParams, {
    arrayFormat: 'repeat',
  });
};
