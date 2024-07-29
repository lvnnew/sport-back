import {Context} from '../../types';
import {
  ReliableGlossaryCreateUserInput,
  StrictCreateGlossaryArgs,
} from '../GlossariesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableGlossaryCreateUserInput,
): Promise<StrictCreateGlossaryArgs> => data;
