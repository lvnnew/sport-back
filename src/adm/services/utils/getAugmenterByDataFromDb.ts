import * as R from 'ramda';
import {PartialMaybe} from '../../../types/utils';

const getAugmenterByDataFromDb = <ID extends string | bigint | number, T extends Record<string, any>>(
  getter: (args: {where: {id?: ID}, select?: Record<string, true> | null}) => Promise<T | null>,
  augmentedFields: string[],
) => async (
    data: PartialMaybe<T> & {id: ID},
  ): Promise<T> => {
    if (augmentedFields.length === 0) {
      return data as unknown as T;
    }

    return {
      ...(
        await getter({
          where: {id: data.id},
          select: R.fromPairs(augmentedFields.map(f => [f, true])),
        })
      ),
      ...R.omit(
        augmentedFields,
        data,
      ),
    } as unknown as T;
  };

export default getAugmenterByDataFromDb;
