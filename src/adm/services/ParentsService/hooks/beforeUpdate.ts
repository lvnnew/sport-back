import {
  StrictUpdateParentArgs,
} from '../ParentsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateParentArgs,
): Promise<StrictUpdateParentArgs> => data;
