import {Context} from '../../types';
import {StrictUpdateMessageTemplateArgs, StrictCreateMessageTemplateArgs} from '../MessageTemplatesService';

export const beforeUpsert = async (
  _ctx: Context,
  createData: StrictCreateMessageTemplateArgs,
  updateData: StrictUpdateMessageTemplateArgs,
): Promise<{createData: StrictCreateMessageTemplateArgs, updateData: StrictUpdateMessageTemplateArgs}> => {
  return {createData, updateData};
};
