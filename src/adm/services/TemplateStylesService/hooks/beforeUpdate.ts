import {
  StrictUpdateTemplateStyleArgs,
} from '../TemplateStylesService';
import {Context} from '../../types';

export const beforeUpdate = async (
  _ctx: Context,
  data: StrictUpdateTemplateStyleArgs,
): Promise<StrictUpdateTemplateStyleArgs> => data;
