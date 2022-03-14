import {singular} from 'pluralize';
import * as R from 'ramda';

export const toPrismaWhere = (filter?: Record<string, any> | null) => {
  let result = {};

  if (!filter) {
    return result;
  }

  const postfixesForAnd = [
    '_lte',
    '_gte',
    '_lt',
    '_gt',
    '_in',
  ];

  const initialPairs = R.toPairs<string>(filter as Record<string, string>);

  const flatPairs = initialPairs
    .filter(
      ([key, _]: R.KeyValuePair<string, any>) => !['ids', 'q'].includes(key) && !postfixesForAnd.some(pf => key.includes(pf)),
    );

  const flatWhere = R.fromPairs(flatPairs);

  result = {
    ...result,
    ...flatWhere,
  };

  if (Object.keys(filter).includes('q') && (filter as any).q.trim()) {
    const searcQuery = (filter as any).q.trim().toLowerCase() as string;
    const searchKeys = searcQuery.split(' ').map(k => k.trim()).filter(k => k);
    result = {
      ...result,
      AND: searchKeys.map(searchKey => ({
        search: {
          contains: searchKey,
        },
      })),
    };
  }

  const pairsForAnd = initialPairs.filter(
    ([key, _]: R.KeyValuePair<string, any>) => postfixesForAnd.some(pf => key.includes(pf)),
  );

  if (pairsForAnd.length > 0) {
    const filtersForAnd = pairsForAnd
      .map(([key, value]) => {
        if (key.includes('_lte')) {
          return [key.replace(/(_lte)$/u, ''), {lte: value}];
        } else if (key.includes('_gte')) {
          return [key.replace(/(_gte)$/u, ''), {gte: value}];
        } else if (key.includes('_lt')) {
          return [key.replace(/(_lt)$/u, ''), {lt: value}];
        } else if (key.includes('_gt')) {
          return [key.replace(/(_gt)$/u, ''), {gt: value}];
        } else if (key.includes('_in')) {
          const clearedKey = key.replace(/(_in)$/u, '');
          const values = value as unknown as any[];
          const hasNullValue = values.includes(null);

          if (hasNullValue) {
            const valuesWithoutNull = values.filter(el => el !== null);
            return ['OR', [{[clearedKey]: {in: valuesWithoutNull}}, {[clearedKey]: null}]];
          } else {
            return [clearedKey, {in: value}];
          }
        }

        throw new Error(`Unknown AND filter, key: "${key}"`);
      })
      .map(([key, value]) => R.fromPairs([[key, value]] as R.KeyValuePair<string, string>[]));

    result = {
      ...result,
      AND: filtersForAnd,
    };
  }

  // Arrays
  const arraysPairs = initialPairs
    .filter(
      ([key, val]: R.KeyValuePair<string, any>) => Array.isArray(val) && !postfixesForAnd.some(pf => key.includes(pf)),
    );
  if (arraysPairs.length > 0) {
    const arrays = arraysPairs
      .map(([key, value]) => R.fromPairs([[singular(key), {
        in: value,
      }]]))
      .reduce((acc, current) => ({...acc, ...current}), {});

    result = {
      ...result,
      ...arrays,
    };
  }

  return result;
};
