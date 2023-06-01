import {
  MutationCreateMessageTypeArgs,
  MutationUpdateMessageTypeArgs,
  MutationRemoveMessageTypeArgs,
  QueryAllMessageTypesArgs,
  MessageType,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMessageTypeKeys = never;
export type ForbidenForUserMessageTypeKeys = never;
export type RequiredDbNotUserMessageTypeKeys = never;

export type AutodefinableMessageTypePart = DefinedRecord<Pick<MutationCreateMessageTypeArgs, AutodefinableMessageTypeKeys>>;

export type ReliableMessageTypeCreateUserInput =
  Omit<MutationCreateMessageTypeArgs, ForbidenForUserMessageTypeKeys>
  & AutodefinableMessageTypePart;

export type AllowedMessageTypeForUserCreateInput = Omit<MutationCreateMessageTypeArgs, ForbidenForUserMessageTypeKeys>;

export type StrictCreateMessageTypeArgs = DefinedFieldsInRecord<MutationCreateMessageTypeArgs, RequiredDbNotUserMessageTypeKeys> & AutodefinableMessageTypePart;
export type StrictUpdateMessageTypeArgs = DefinedFieldsInRecord<MutationUpdateMessageTypeArgs, RequiredDbNotUserMessageTypeKeys> & AutodefinableMessageTypePart;

export type StrictCreateMessageTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMessageTypeArgs, AutodefinableMessageTypeKeys>;
export type MutationCreateMessageTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMessageTypeArgs, AutodefinableMessageTypeKeys>;
export type MutationUpdateMessageTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMessageTypeArgs, AutodefinableMessageTypeKeys>;

export class MessageTypesService extends BaseService<
  MessageType,
  MutationCreateMessageTypeArgs,
  MutationUpdateMessageTypeArgs,
  MutationRemoveMessageTypeArgs,
  QueryAllMessageTypesArgs,
  AutodefinableMessageTypeKeys,
  ForbidenForUserMessageTypeKeys,
  RequiredDbNotUserMessageTypeKeys,
  Prisma.MessageTypeDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.messageType, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
