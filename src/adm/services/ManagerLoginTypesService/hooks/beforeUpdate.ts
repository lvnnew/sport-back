import {
  StrictUpdateManagerLoginTypeArgs,
} from '../ManagerLoginTypesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateManagerLoginTypeArgs,
): Promise<StrictUpdateManagerLoginTypeArgs> => data;
