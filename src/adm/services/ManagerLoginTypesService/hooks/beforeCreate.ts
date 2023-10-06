import {Context} from '../../types';
import {
  ReliableManagerLoginTypeCreateUserInput,
  StrictCreateManagerLoginTypeArgs,
} from '../ManagerLoginTypesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableManagerLoginTypeCreateUserInput,
): Promise<StrictCreateManagerLoginTypeArgs> => data;
