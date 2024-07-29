import {
  StrictUpdateGlossaryArgs,
} from '../GlossariesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateGlossaryArgs,
): Promise<StrictUpdateGlossaryArgs> => data;
