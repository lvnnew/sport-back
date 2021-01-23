import {fromPairs, toPairs} from "lodash";

export const toPrismaWhere = (filter?: object | null) => {
  if (!filter) {
    return {};
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

  const pairsForAnd = initialPairs.filter(([key, _]: [string, any]) => postfixesForAnd.some(pf => key.includes(pf)));

  if (pairsForAnd.length === 0) {
    return flatWhere;
  }

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
    .map(([key, value]) => fromPairs([[key, value]]))

  return {
    ...flatWhere,
    AND: filtersForAnd,
  };
};