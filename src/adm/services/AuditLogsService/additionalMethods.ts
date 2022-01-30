import {Context} from '../types';
import {BaseAuditLogsMethods} from './AuditLogsService';

export interface AdditionalAuditLogsMethods {}

export const getAdditionalMethods = (_ctx: Context, _baseMethods: BaseAuditLogsMethods): AdditionalAuditLogsMethods => ({});
