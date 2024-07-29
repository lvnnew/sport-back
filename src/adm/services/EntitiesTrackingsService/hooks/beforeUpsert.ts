import {Context} from '../../types';
import {
  StrictUpdateEntitiesTrackingArgs,
  StrictCreateEntitiesTrackingArgs,
  ReliableEntitiesTrackingCreateUserInput,
} from '../EntitiesTrackingsService';

type InputData = {
  createData: ReliableEntitiesTrackingCreateUserInput,
  updateData: StrictUpdateEntitiesTrackingArgs,
};
type ReturnData = {
  createData: StrictCreateEntitiesTrackingArgs,
  updateData: StrictUpdateEntitiesTrackingArgs,
};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: InputData,
): Promise<ReturnData> => {
  return {
    createData,
    updateData,
  };
};
