/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseFilesMethods} from './FilesService';

export interface AdditionalFilesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseFilesMethods): AdditionalFilesMethods => ({});
