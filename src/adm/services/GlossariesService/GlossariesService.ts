import {
  MutationCreateGlossaryArgs,
  MutationUpdateGlossaryArgs,
  MutationRemoveGlossaryArgs,
  QueryAllGlossariesArgs,
  Glossary,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableGlossaryKeys = never;
export type ForbidenForUserGlossaryKeys = never;
export type RequiredDbNotUserGlossaryKeys = never;

export type AutodefinableGlossaryPart = DefinedRecord<Pick<MutationCreateGlossaryArgs, AutodefinableGlossaryKeys>>;

export type ReliableGlossaryCreateUserInput =
  Omit<MutationCreateGlossaryArgs, ForbidenForUserGlossaryKeys>
  & AutodefinableGlossaryPart;

export type AllowedGlossaryForUserCreateInput = Omit<MutationCreateGlossaryArgs, ForbidenForUserGlossaryKeys>;

export type StrictCreateGlossaryArgs = DefinedFieldsInRecord<MutationCreateGlossaryArgs, RequiredDbNotUserGlossaryKeys> & AutodefinableGlossaryPart;
export type StrictUpdateGlossaryArgs = DefinedFieldsInRecord<MutationUpdateGlossaryArgs, RequiredDbNotUserGlossaryKeys> & AutodefinableGlossaryPart;

export type StrictCreateGlossaryArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateGlossaryArgs, AutodefinableGlossaryKeys>;
export type MutationCreateGlossaryArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateGlossaryArgs, AutodefinableGlossaryKeys>;
export type MutationUpdateGlossaryArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateGlossaryArgs, AutodefinableGlossaryKeys>;

export class GlossariesService extends BaseService<
  Glossary,
  MutationCreateGlossaryArgs,
  MutationUpdateGlossaryArgs,
  MutationRemoveGlossaryArgs,
  QueryAllGlossariesArgs,
  AutodefinableGlossaryKeys,
  ForbidenForUserGlossaryKeys,
  RequiredDbNotUserGlossaryKeys,
  Prisma.GlossaryDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.glossary, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
