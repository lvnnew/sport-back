import {Context} from '../../types';
import {MutationCreateDelegationArgsWithAutoDefinable} from '../DelegationsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateDelegationArgsWithAutoDefinable,
): Promise<MutationCreateDelegationArgsWithAutoDefinable> => data;
