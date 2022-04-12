import {Context} from '../../types';
import {
  ReliableUnitCreateUserInput,
  StrictCreateUnitArgs,
} from '../UnitsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableUnitCreateUserInput,
): Promise<StrictCreateUnitArgs> => data;
