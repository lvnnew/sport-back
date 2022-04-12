import {
  StrictUpdateAppLoginArgs,
} from '../AppLoginsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateAppLoginArgs,
): Promise<StrictUpdateAppLoginArgs> => data;
