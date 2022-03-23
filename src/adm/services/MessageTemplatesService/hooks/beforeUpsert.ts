import {Context} from '../../types';
import {StrictUpdateMessageTemplateArgs, StrictCreateMessageTemplateArgs} from '../MessageTemplatesService';

type Data = {createData: StrictCreateMessageTemplateArgs, updateData: StrictUpdateMessageTemplateArgs};

export const beforeUpsert = async (
  _ctx: Context,
  {createData, updateData}: Data,
): Promise<Data> => {
  return {createData, updateData};
};
