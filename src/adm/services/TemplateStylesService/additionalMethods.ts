import {Context} from '../types';
import {BaseTemplateStylesMethods} from './TemplateStylesService';

export interface AdditionalTemplateStylesMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BaseTemplateStylesMethods): AdditionalTemplateStylesMethods => ({});
