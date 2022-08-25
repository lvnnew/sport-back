import {Context} from '../../types';
import {
  StrictUpdateMessageTemplateLangVariantArgs,
  StrictCreateMessageTemplateLangVariantArgs,
  ReliableMessageTemplateLangVariantCreateUserInput,
} from '../MessageTemplateLangVariantsService';

type InputData = {
  createData: ReliableMessageTemplateLangVariantCreateUserInput,
  updateData: StrictUpdateMessageTemplateLangVariantArgs,
};
type ReturnData = {
  createData: StrictCreateMessageTemplateLangVariantArgs,
  updateData: StrictUpdateMessageTemplateLangVariantArgs,
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
