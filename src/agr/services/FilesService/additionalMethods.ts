/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {AgrContext} from '../context';
import {BaseFilesMethods} from './FilesService';

export interface AdditionalFilesMethods {}

export const getAdditionalMethods = (_getCtx: () => AgrContext, _baseMethods: BaseFilesMethods): AdditionalFilesMethods => ({});
