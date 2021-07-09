/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {Context} from '../context';
import {BaseManagersMethods} from './ManagersService';

export interface AdditionalManagersMethods {}

export const getAdditionalMethods = (_getCtx: () => Context, _baseMethods: BaseManagersMethods): AdditionalManagersMethods => ({});
