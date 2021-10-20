import {Context} from '../context';
import {BaseMessageTemplatesMethods} from './MessageTemplatesService';

export interface AdditionalMessageTemplatesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseMessageTemplatesMethods): AdditionalMessageTemplatesMethods => ({});
