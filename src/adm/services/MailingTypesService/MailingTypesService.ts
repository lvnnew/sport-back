import {
  MutationCreateMailingTypeArgs,
  MutationUpdateMailingTypeArgs,
  MutationRemoveMailingTypeArgs,
  QueryAllMailingTypesArgs,
  MailingType,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMailingTypeKeys = never;
export type ForbidenForUserMailingTypeKeys = never;
export type RequiredDbNotUserMailingTypeKeys = never;

export type AutodefinableMailingTypePart = DefinedRecord<Pick<MutationCreateMailingTypeArgs, AutodefinableMailingTypeKeys>>;

export type ReliableMailingTypeCreateUserInput =
  Omit<MutationCreateMailingTypeArgs, ForbidenForUserMailingTypeKeys>
  & AutodefinableMailingTypePart;

export type AllowedMailingTypeForUserCreateInput = Omit<MutationCreateMailingTypeArgs, ForbidenForUserMailingTypeKeys>;

export type StrictCreateMailingTypeArgs = DefinedFieldsInRecord<MutationCreateMailingTypeArgs, RequiredDbNotUserMailingTypeKeys> & AutodefinableMailingTypePart;
export type StrictUpdateMailingTypeArgs = DefinedFieldsInRecord<MutationUpdateMailingTypeArgs, RequiredDbNotUserMailingTypeKeys> & AutodefinableMailingTypePart;

export type StrictCreateMailingTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMailingTypeArgs, AutodefinableMailingTypeKeys>;
export type MutationCreateMailingTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMailingTypeArgs, AutodefinableMailingTypeKeys>;
export type MutationUpdateMailingTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMailingTypeArgs, AutodefinableMailingTypeKeys>;

export class MailingTypesService extends BaseService<
  MailingType,
  MutationCreateMailingTypeArgs,
  MutationUpdateMailingTypeArgs,
  MutationRemoveMailingTypeArgs,
  QueryAllMailingTypesArgs,
  AutodefinableMailingTypeKeys,
  ForbidenForUserMailingTypeKeys,
  RequiredDbNotUserMailingTypeKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.mailingType, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
