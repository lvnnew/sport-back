import {
  MutationCreateAuditLogActionTypeArgs,
  MutationUpdateAuditLogActionTypeArgs,
  MutationRemoveAuditLogActionTypeArgs,
  QueryAllAuditLogActionTypesArgs,
  AuditLogActionType,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAuditLogActionTypeKeys = never;
export type ForbidenForUserAuditLogActionTypeKeys = never;
export type RequiredDbNotUserAuditLogActionTypeKeys = never;

export type AutodefinableAuditLogActionTypePart = DefinedRecord<Pick<MutationCreateAuditLogActionTypeArgs, AutodefinableAuditLogActionTypeKeys>>;

export type ReliableAuditLogActionTypeCreateUserInput =
  Omit<MutationCreateAuditLogActionTypeArgs, ForbidenForUserAuditLogActionTypeKeys>
  & AutodefinableAuditLogActionTypePart;

export type AllowedAuditLogActionTypeForUserCreateInput = Omit<MutationCreateAuditLogActionTypeArgs, ForbidenForUserAuditLogActionTypeKeys>;

export type StrictCreateAuditLogActionTypeArgs = DefinedFieldsInRecord<MutationCreateAuditLogActionTypeArgs, RequiredDbNotUserAuditLogActionTypeKeys> & AutodefinableAuditLogActionTypePart;
export type StrictUpdateAuditLogActionTypeArgs = DefinedFieldsInRecord<MutationUpdateAuditLogActionTypeArgs, RequiredDbNotUserAuditLogActionTypeKeys> & AutodefinableAuditLogActionTypePart;

export type StrictCreateAuditLogActionTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAuditLogActionTypeArgs, AutodefinableAuditLogActionTypeKeys>;
export type MutationCreateAuditLogActionTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAuditLogActionTypeArgs, AutodefinableAuditLogActionTypeKeys>;
export type MutationUpdateAuditLogActionTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAuditLogActionTypeArgs, AutodefinableAuditLogActionTypeKeys>;

export class AuditLogActionTypesService extends BaseService<
  AuditLogActionType,
  MutationCreateAuditLogActionTypeArgs,
  MutationUpdateAuditLogActionTypeArgs,
  MutationRemoveAuditLogActionTypeArgs,
  QueryAllAuditLogActionTypesArgs,
  AutodefinableAuditLogActionTypeKeys,
  ForbidenForUserAuditLogActionTypeKeys,
  RequiredDbNotUserAuditLogActionTypeKeys,
  Prisma.AuditLogActionTypeDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.auditLogActionType, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
