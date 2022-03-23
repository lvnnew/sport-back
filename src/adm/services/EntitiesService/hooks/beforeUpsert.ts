import {Context} from '../../types';
import {StrictUpdateEntityArgs, StrictCreateEntityArgs} from '../EntitiesService';

type Data = {createData: StrictCreateEntityArgs, updateData: StrictUpdateEntityArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
