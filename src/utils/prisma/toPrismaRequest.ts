import {toPrismaWhere} from './toPrismaWhere';
import {IAllRequestArgs, IOptions} from '../types';

export const toPrismaRequest = ({filter, page, perPage, sortField, sortOrder}: IAllRequestArgs, options?: IOptions) => {
  const orderBy = sortField && (
    !options || !options.noId || options.noId &&
    sortField !== 'id'
  ) ?
    {[sortField]: (
      (sortOrder && sortOrder === 'ASC') ?
        'asc' :
        'desc'
    )} :
    undefined;

  return {
    orderBy,
    skip: (page || 0) * (perPage || 0),
    take: perPage || undefined,
    where: toPrismaWhere(filter),
  };
};
