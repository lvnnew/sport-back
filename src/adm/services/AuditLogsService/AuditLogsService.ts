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
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAuditLogKeys = 'success' | 'foreign';
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
  RequiredDbNotUserAuditLogKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.auditLog, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableAuditLogPart> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ctx = this.ctx;

    const defaultFieldConstructors = {
      success: async () => false,
      foreign: async () => false,
    };

    const pairedConstructors = R.toPairs(defaultFieldConstructors);

    const resultedPairs: R.KeyValuePair<string, any>[] = [];
    for (const [key, constructor] of pairedConstructors) {
      resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
    }

    return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableAuditLogPart;
  };
}
