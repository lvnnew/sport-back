import {
  StrictUpdateDelegationArgs,
} from '../DelegationsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateDelegationArgs,
): Promise<StrictUpdateDelegationArgs> => data;
