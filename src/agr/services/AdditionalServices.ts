import {AgrContext} from './context';

export interface AdditionalServices {}

export const getAdditionalServices = (_getCtx: () => AgrContext): AdditionalServices => ({});
