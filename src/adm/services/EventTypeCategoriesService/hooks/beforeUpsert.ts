import {Context} from '../../types';
import {
  StrictUpdateEventTypeCategoryArgs,
  StrictCreateEventTypeCategoryArgs,
  ReliableEventTypeCategoryCreateUserInput,
} from '../EventTypeCategoriesService';

type InputData = {
  createData: ReliableEventTypeCategoryCreateUserInput,
  updateData: StrictUpdateEventTypeCategoryArgs,
};
type ReturnData = {
  createData: StrictCreateEventTypeCategoryArgs,
  updateData: StrictUpdateEventTypeCategoryArgs,
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
