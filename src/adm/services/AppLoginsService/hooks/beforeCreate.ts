import {Context} from '../../types';
import {
  ReliableAppLoginCreateUserInput,
  StrictCreateAppLoginArgs,
} from '../AppLoginsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableAppLoginCreateUserInput,
): Promise<StrictCreateAppLoginArgs> => data;
