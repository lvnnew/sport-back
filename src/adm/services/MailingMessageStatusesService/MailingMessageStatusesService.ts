import {
  MutationCreateMailingMessageStatusArgs,
  MutationUpdateMailingMessageStatusArgs,
  MutationRemoveMailingMessageStatusArgs,
  QueryAllMailingMessageStatusesArgs,
  MailingMessageStatus,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMailingMessageStatusKeys = 'final';
export type ForbidenForUserMailingMessageStatusKeys = never;
export type RequiredDbNotUserMailingMessageStatusKeys = never;

export type AutodefinableMailingMessageStatusPart = DefinedRecord<Pick<MutationCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>>;

export type ReliableMailingMessageStatusCreateUserInput =
  Omit<MutationCreateMailingMessageStatusArgs, ForbidenForUserMailingMessageStatusKeys>
  & AutodefinableMailingMessageStatusPart;

export type AllowedMailingMessageStatusForUserCreateInput = Omit<MutationCreateMailingMessageStatusArgs, ForbidenForUserMailingMessageStatusKeys>;

export type StrictCreateMailingMessageStatusArgs = DefinedFieldsInRecord<MutationCreateMailingMessageStatusArgs, RequiredDbNotUserMailingMessageStatusKeys> & AutodefinableMailingMessageStatusPart;
export type StrictUpdateMailingMessageStatusArgs = DefinedFieldsInRecord<MutationUpdateMailingMessageStatusArgs, RequiredDbNotUserMailingMessageStatusKeys> & AutodefinableMailingMessageStatusPart;

export type StrictCreateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;
export type MutationCreateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;
export type MutationUpdateMailingMessageStatusArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingMessageStatusArgs, AutodefinableMailingMessageStatusKeys>;

export class MailingMessageStatusesService extends BaseService<
  MailingMessageStatus,
  MutationCreateMailingMessageStatusArgs,
  MutationUpdateMailingMessageStatusArgs,
  MutationRemoveMailingMessageStatusArgs,
  QueryAllMailingMessageStatusesArgs,
  AutodefinableMailingMessageStatusKeys,
  ForbidenForUserMailingMessageStatusKeys,
  RequiredDbNotUserMailingMessageStatusKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.mailingMessageStatus, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMailingMessageStatusPart> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ctx = this.ctx;

    const defaultFieldConstructors = {
      final: async () => false,
    };

    const pairedConstructors = R.toPairs(defaultFieldConstructors);

    const resultedPairs: R.KeyValuePair<string, any>[] = [];
    for (const [key, constructor] of pairedConstructors) {
      resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
    }

    return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableMailingMessageStatusPart;
  };
}
