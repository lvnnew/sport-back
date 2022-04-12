import {Context} from '../../types';
import {
  ReliableDelegationCreateUserInput,
  StrictCreateDelegationArgs,
} from '../DelegationsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableDelegationCreateUserInput,
): Promise<StrictCreateDelegationArgs> => data;
