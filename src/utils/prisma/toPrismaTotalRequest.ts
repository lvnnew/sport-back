import {IAllRequestArgs, IOptions} from '../types';
import {toPrismaWhere} from './toPrismaWhere';

export const toPrismaTotalRequest = ({filter, sortField, sortOrder}: IAllRequestArgs, options?: IOptions) => {
  const orderBy = sortField && (!options || !options.noId || options.noId && sortField !== 'id') ?
    {[sortField]: (
      (sortOrder && sortOrder === 'ASC') ?
        'asc' :
        'desc'
    )} :
    undefined;

  return {
    orderBy,
    where: toPrismaWhere(filter),
  };
};
