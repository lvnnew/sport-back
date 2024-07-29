import {
  MutationCreateWscMessageArgs,
  MutationUpdateWscMessageArgs,
  MutationRemoveWscMessageArgs,
  QueryAllWscMessagesArgs,
  WscMessage,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableWscMessageKeys = never;
export type ForbidenForUserWscMessageKeys = never;
export type RequiredDbNotUserWscMessageKeys = never;

export type AutodefinableWscMessagePart = DefinedRecord<Pick<MutationCreateWscMessageArgs, AutodefinableWscMessageKeys>>;

export type ReliableWscMessageCreateUserInput =
  Omit<MutationCreateWscMessageArgs, ForbidenForUserWscMessageKeys>
  & AutodefinableWscMessagePart;

export type AllowedWscMessageForUserCreateInput = Omit<MutationCreateWscMessageArgs, ForbidenForUserWscMessageKeys>;

export type StrictCreateWscMessageArgs = DefinedFieldsInRecord<MutationCreateWscMessageArgs, RequiredDbNotUserWscMessageKeys> & AutodefinableWscMessagePart;
export type StrictUpdateWscMessageArgs = DefinedFieldsInRecord<MutationUpdateWscMessageArgs, RequiredDbNotUserWscMessageKeys> & AutodefinableWscMessagePart;

export type StrictCreateWscMessageArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateWscMessageArgs, AutodefinableWscMessageKeys>;
export type MutationCreateWscMessageArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateWscMessageArgs, AutodefinableWscMessageKeys>;
export type MutationUpdateWscMessageArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateWscMessageArgs, AutodefinableWscMessageKeys>;

export class WscMessagesService extends BaseService<
  WscMessage,
  MutationCreateWscMessageArgs,
  MutationUpdateWscMessageArgs,
  MutationRemoveWscMessageArgs,
  QueryAllWscMessagesArgs,
  AutodefinableWscMessageKeys,
  ForbidenForUserWscMessageKeys,
  RequiredDbNotUserWscMessageKeys,
  Prisma.WscMessageDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.wscMessage, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
