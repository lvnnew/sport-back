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
    '_defined',
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
    const searchKeys = searcQuery.split(' ').map(k => k.trim()).filter(Boolean);
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
          return [key.replaceAll(/(_lte)$/gu, ''), {lte: value}];
        } else if (key.includes('_gte')) {
          return [key.replaceAll(/(_gte)$/gu, ''), {gte: value}];
        } else if (key.includes('_lt')) {
          return [key.replaceAll(/(_lt)$/gu, ''), {lt: value}];
        } else if (key.includes('_gt')) {
          return [key.replaceAll(/(_gt)$/gu, ''), {gt: value}];
        } else if (key.includes('_in')) {
          const clearedKey = key.replaceAll(/(_in)$/gu, '');
          const values = value as unknown as any[];
          const hasNullValue = values.includes(null);

          if (hasNullValue) {
            const valuesWithoutNull = values.filter(el => el !== null);
            return ['OR', [{[clearedKey]: {in: valuesWithoutNull}}, {[clearedKey]: null}]];
          } else {
            return [clearedKey, {in: value}];
          }
        } else if (key.includes('_defined')) {
          const clearedKey = key.replaceAll(/(_defined)$/gu, '');

          if (value) {
            return [clearedKey, {not: null}];
          } else {
            return [clearedKey, null];
          }
        }

        throw new Error(`Unknown AND filter, key: "${key}"`);
      })
      .map(([key, value]) => R.fromPairs([[key, value]] as R.KeyValuePair<string, string>[]));

    result = {
      ...result,
      AND: [
        ...(result as any).AND ?? [],
        ...filtersForAnd,
      ],
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
      AND: [
        ...(result as any).AND ?? [],
        {...arrays},
      ],
    };
  }

  return result;
};
