/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseLanguagesMethods} from './LanguagesService';

export interface AdditionalLanguagesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseLanguagesMethods): AdditionalLanguagesMethods => ({});
