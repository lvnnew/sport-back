import {Context} from '../context';
import {BaseFilesMethods} from './FilesService';

export interface AdditionalFilesMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseFilesMethods): AdditionalFilesMethods => ({});
