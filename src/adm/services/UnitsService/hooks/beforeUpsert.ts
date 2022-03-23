import {Context} from '../../types';
import {StrictUpdateUnitArgs, StrictCreateUnitArgs} from '../UnitsService';

type Data = {createData: StrictCreateUnitArgs, updateData: StrictUpdateUnitArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
