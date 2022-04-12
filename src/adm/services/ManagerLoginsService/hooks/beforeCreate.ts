import {Context} from '../../types';
import {
  ReliableManagerLoginCreateUserInput,
  StrictCreateManagerLoginArgs,
} from '../ManagerLoginsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableManagerLoginCreateUserInput,
): Promise<StrictCreateManagerLoginArgs> => data;
