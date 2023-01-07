import {
  MutationCreateMessageTemplateArgs,
  MutationUpdateMessageTemplateArgs,
  MutationRemoveMessageTemplateArgs,
  QueryAllMessageTemplatesArgs,
  MessageTemplate,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMessageTemplateKeys = 'secretData';
export type ForbidenForUserMessageTemplateKeys = never;
export type RequiredDbNotUserMessageTemplateKeys = never;

export type AutodefinableMessageTemplatePart = DefinedRecord<Pick<MutationCreateMessageTemplateArgs, AutodefinableMessageTemplateKeys>>;

export type ReliableMessageTemplateCreateUserInput =
  Omit<MutationCreateMessageTemplateArgs, ForbidenForUserMessageTemplateKeys>
  & AutodefinableMessageTemplatePart;

export type AllowedMessageTemplateForUserCreateInput = Omit<MutationCreateMessageTemplateArgs, ForbidenForUserMessageTemplateKeys>;

export type StrictCreateMessageTemplateArgs = DefinedFieldsInRecord<MutationCreateMessageTemplateArgs, RequiredDbNotUserMessageTemplateKeys> & AutodefinableMessageTemplatePart;
export type StrictUpdateMessageTemplateArgs = DefinedFieldsInRecord<MutationUpdateMessageTemplateArgs, RequiredDbNotUserMessageTemplateKeys> & AutodefinableMessageTemplatePart;

export type StrictCreateMessageTemplateArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMessageTemplateArgs, AutodefinableMessageTemplateKeys>;
export type MutationCreateMessageTemplateArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMessageTemplateArgs, AutodefinableMessageTemplateKeys>;
export type MutationUpdateMessageTemplateArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMessageTemplateArgs, AutodefinableMessageTemplateKeys>;

export class MessageTemplatesService extends BaseService<
  MessageTemplate,
  MutationCreateMessageTemplateArgs,
  MutationUpdateMessageTemplateArgs,
  MutationRemoveMessageTemplateArgs,
  QueryAllMessageTemplatesArgs,
  AutodefinableMessageTemplateKeys,
  ForbidenForUserMessageTemplateKeys,
  RequiredDbNotUserMessageTemplateKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.messageTemplate, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableMessageTemplatePart> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ctx = this.ctx;

    const defaultFieldConstructors = {
      secretData: async () => false,
    };

    const pairedConstructors = R.toPairs(defaultFieldConstructors);

    const resultedPairs: R.KeyValuePair<string, any>[] = [];
    for (const [key, constructor] of pairedConstructors) {
      resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
    }

    return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableMessageTemplatePart;
  };
}
