import {Context} from '../../types';
import {QueryAllMailingCampaignsArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMailingCampaignsArgs = QueryAllMailingCampaignsArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
