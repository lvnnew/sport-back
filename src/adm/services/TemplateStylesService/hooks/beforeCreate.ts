import {Context} from '../../types';
import {
  ReliableTemplateStyleCreateUserInput,
  StrictCreateTemplateStyleArgs,
} from '../TemplateStylesService';

export const beforeCreate = async (
  _ctx: Context,
  data: ReliableTemplateStyleCreateUserInput,
): Promise<StrictCreateTemplateStyleArgs> => data;
