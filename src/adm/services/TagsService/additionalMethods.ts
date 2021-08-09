import {Context} from '../context';
import {BaseTagsMethods} from './TagsService';

export interface AdditionalTagsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseTagsMethods): AdditionalTagsMethods => ({});
