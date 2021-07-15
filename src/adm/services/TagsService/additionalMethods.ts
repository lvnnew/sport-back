/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseTagsMethods} from './TagsService';

export interface AdditionalTagsMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseTagsMethods): AdditionalTagsMethods => ({});
