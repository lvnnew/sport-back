import {
  MutationCreateAuditLogArgs,
  MutationUpdateAuditLogArgs,
  MutationRemoveAuditLogArgs,
  QueryAllAuditLogsArgs,
  AuditLog,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAuditLogKeys = never;
export type ForbidenForUserAuditLogKeys = never;
export type RequiredDbNotUserAuditLogKeys = never;

export type AutodefinableAuditLogPart = DefinedRecord<Pick<MutationCreateAuditLogArgs, AutodefinableAuditLogKeys>>;

export type ReliableAuditLogCreateUserInput =
  Omit<MutationCreateAuditLogArgs, ForbidenForUserAuditLogKeys>
  & AutodefinableAuditLogPart;

export type AllowedAuditLogForUserCreateInput = Omit<MutationCreateAuditLogArgs, ForbidenForUserAuditLogKeys>;

export type StrictCreateAuditLogArgs = DefinedFieldsInRecord<MutationCreateAuditLogArgs, RequiredDbNotUserAuditLogKeys> & AutodefinableAuditLogPart;
export type StrictUpdateAuditLogArgs = DefinedFieldsInRecord<MutationUpdateAuditLogArgs, RequiredDbNotUserAuditLogKeys> & AutodefinableAuditLogPart;

export type StrictCreateAuditLogArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAuditLogArgs, AutodefinableAuditLogKeys>;
export type MutationCreateAuditLogArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAuditLogArgs, AutodefinableAuditLogKeys>;
export type MutationUpdateAuditLogArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAuditLogArgs, AutodefinableAuditLogKeys>;

export class AuditLogsService extends BaseService<
  AuditLog,
  MutationCreateAuditLogArgs,
  MutationUpdateAuditLogArgs,
  MutationRemoveAuditLogArgs,
  QueryAllAuditLogsArgs,
  AutodefinableAuditLogKeys,
  ForbidenForUserAuditLogKeys,
  RequiredDbNotUserAuditLogKeys,
  Prisma.AuditLogDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.auditLog, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
