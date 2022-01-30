import {Context} from '../types';
import {BaseTagsMethods} from './TagsService';

export interface AdditionalTagsMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BaseTagsMethods): AdditionalTagsMethods => ({});
