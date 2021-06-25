import {singular} from 'pluralize';
import R, {KeyValuePair} from 'ramda';

export const toPrismaWhere = (filter?: object | null) => {
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

  const flatPairs = initialPairs.filter(([key, _]: KeyValuePair<string, any>) => !['ids', 'q'].includes(key) && !postfixesForAnd.some(pf => key.includes(pf)));

  const flatWhere = R.fromPairs(flatPairs);

  result = {
    ...result,
    ...flatWhere,
  };

  if (Object.keys(filter).includes('q')) {
    result = {
      ...result,
      search: {
        contains: (filter as any).q.toLowerCase(),
      },
    };
  }

  const pairsForAnd = initialPairs.filter(([key, _]: KeyValuePair<string, any>) => postfixesForAnd.some(pf => key.includes(pf)));

  if (pairsForAnd.length > 0) {
    const filtersForAnd = pairsForAnd
      .map(([key, value]) => {
        if (key.includes('_lte')) {
          return [key.replace(/(_lte)$/, ''), {lte: value}];
        } else if (key.includes('_gte')) {
          return [key.replace(/(_gte)$/, ''), {gte: value}];
        } else if (key.includes('_lt')) {
          return [key.replace(/(_lt)$/, ''), {lt: value}];
        } else if (key.includes('_gt')) {
          return [key.replace(/(_gt)$/, ''), {gt: value}];
        } else if (key.includes('_in')) {
          return [key.replace(/(_in)$/, ''), {in: value}];
        }

        throw new Error(`Unknown AND filter, key: "${key}"`);
      })
      .map(([key, value]) => R.fromPairs([[key, value]] as KeyValuePair<string, string>[]));

    result = {
      ...result,
      AND: filtersForAnd,
    };
  }

  // Arrays
  const arraysPairs = initialPairs.filter(([key, val]: KeyValuePair<string, any>) => Array.isArray(val) && !postfixesForAnd.some(pf => key.includes(pf)));
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
