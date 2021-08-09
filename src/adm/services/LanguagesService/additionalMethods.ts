import {Context} from '../context';
import {BaseLanguagesMethods} from './LanguagesService';

export interface AdditionalLanguagesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseLanguagesMethods): AdditionalLanguagesMethods => ({});
