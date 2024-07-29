import {Context} from '../../types';
import {
  ReliableParentCreateUserInput,
  StrictCreateParentArgs,
} from '../ParentsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableParentCreateUserInput,
): Promise<StrictCreateParentArgs> => data;
