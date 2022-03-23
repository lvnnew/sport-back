import {Context} from '../../types';
import {StrictUpdateStatArgs, StrictCreateStatArgs} from '../StatsService';

type Data = {createData: StrictCreateStatArgs, updateData: StrictUpdateStatArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
