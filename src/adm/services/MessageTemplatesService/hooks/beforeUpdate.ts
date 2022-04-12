import {
  StrictUpdateMessageTemplateArgs,
} from '../MessageTemplatesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateMessageTemplateArgs,
): Promise<StrictUpdateMessageTemplateArgs> => data;
