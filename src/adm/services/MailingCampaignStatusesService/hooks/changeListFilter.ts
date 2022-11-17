import {Context} from '../../types';
import {QueryAllMailingCampaignStatusesArgs} from '../../../../generated/graphql';

export const changeListFilter = async <T extends QueryAllMailingCampaignStatusesArgs = QueryAllMailingCampaignStatusesArgs>(
  _ctx: Context,
  args: T,
): Promise<T> => {
  return args;
};
