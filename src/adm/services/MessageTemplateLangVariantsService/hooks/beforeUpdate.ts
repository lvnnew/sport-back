import {
  StrictUpdateMessageTemplateLangVariantArgs,
} from '../MessageTemplateLangVariantsService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMessageTemplateLangVariantArgs,
): Promise<StrictUpdateMessageTemplateLangVariantArgs> => data;
