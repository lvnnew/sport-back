import {Context} from '../../types';
import {MutationCreateUnitArgsWithAutoDefinable} from '../UnitsService';

export const beforeCreate = async (
  _ctx: Context,
  data: MutationCreateUnitArgsWithAutoDefinable,
): Promise<MutationCreateUnitArgsWithAutoDefinable> => data;
