import {
  StrictUpdateManagerLoginArgs,
} from '../ManagerLoginsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateManagerLoginArgs,
): Promise<StrictUpdateManagerLoginArgs> => data;
