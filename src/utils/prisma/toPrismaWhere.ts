import {fromPairs, toPairs} from "lodash";
import { singular } from "pluralize";

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
  ];

  const initialPairs = toPairs(filter);

  const flatPairs = initialPairs.filter(([key, _]: [string, any]) => key !== 'ids' && !postfixesForAnd.some(pf => key.includes(pf)));

  const flatWhere = fromPairs(flatPairs);

  result = {
    ...result,
    ...flatWhere,
  }

  if (Object.keys(filter).includes('q')) {
    result = {
      ...result,
      search: {
        contains: filter['q'],
      },
    }
  }

  const pairsForAnd = initialPairs.filter(([key, _]: [string, any]) => postfixesForAnd.some(pf => key.includes(pf)));

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
        }

        throw new Error(`Unknown AND filter, key: "${key}"`);
      })
      .map(([key, value]) => fromPairs([[key, value]]));

    result = {
      ...result,
      AND: filtersForAnd,
    }
  }

  // Arrays
  const arraysPairs = initialPairs.filter(([_, val]: [string, any]) => Array.isArray(val));
  if (arraysPairs.length > 0) {
    const arrays = arraysPairs
      .map(([key, value]) => fromPairs([[singular(key), {
        in: value,
      }]]))
      .reduce((acc, current) => ({...acc, ...current}), {});

    result = {
      ...result,
      ...arrays,
    }

  }

  return result;
};