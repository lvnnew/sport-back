/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseTagsMethods} from './TagsService';

export interface AdditionalTagsMethods {}

export const getAdditionalMethods = (_getCtx: () => AgrContext, _baseMethods: BaseTagsMethods): AdditionalTagsMethods => ({});
