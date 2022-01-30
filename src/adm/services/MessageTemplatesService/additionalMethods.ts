import {Context} from '../types';
import {BaseMessageTemplatesMethods} from './MessageTemplatesService';

export interface AdditionalMessageTemplatesMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BaseMessageTemplatesMethods): AdditionalMessageTemplatesMethods => ({});
