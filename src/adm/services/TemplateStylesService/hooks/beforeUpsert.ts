import {Context} from '../../types';
import {
  StrictUpdateTemplateStyleArgs,
  StrictCreateTemplateStyleArgs,
  ReliableTemplateStyleCreateUserInput,
} from '../TemplateStylesService';

type InputData = {
  createData: ReliableTemplateStyleCreateUserInput,
  updateData: StrictUpdateTemplateStyleArgs,
};
type ReturnData = {
  createData: StrictCreateTemplateStyleArgs,
  updateData: StrictUpdateTemplateStyleArgs,
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
