import {Context} from '../../types';
import {
  ReliableMessageTemplateLangVariantCreateUserInput,
  StrictCreateMessageTemplateLangVariantArgs,
} from '../MessageTemplateLangVariantsService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableMessageTemplateLangVariantCreateUserInput,
): Promise<StrictCreateMessageTemplateLangVariantArgs> => data;
