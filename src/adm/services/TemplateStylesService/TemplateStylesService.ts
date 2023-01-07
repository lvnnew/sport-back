import {
  MutationCreateTemplateStyleArgs,
  MutationUpdateTemplateStyleArgs,
  MutationRemoveTemplateStyleArgs,
  QueryAllTemplateStylesArgs,
  TemplateStyle,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableTemplateStyleKeys = never;
export type ForbidenForUserTemplateStyleKeys = never;
export type RequiredDbNotUserTemplateStyleKeys = never;

export type AutodefinableTemplateStylePart = DefinedRecord<Pick<MutationCreateTemplateStyleArgs, AutodefinableTemplateStyleKeys>>;

export type ReliableTemplateStyleCreateUserInput =
  Omit<MutationCreateTemplateStyleArgs, ForbidenForUserTemplateStyleKeys>
  & AutodefinableTemplateStylePart;

export type AllowedTemplateStyleForUserCreateInput = Omit<MutationCreateTemplateStyleArgs, ForbidenForUserTemplateStyleKeys>;

export type StrictCreateTemplateStyleArgs = DefinedFieldsInRecord<MutationCreateTemplateStyleArgs, RequiredDbNotUserTemplateStyleKeys> & AutodefinableTemplateStylePart;
export type StrictUpdateTemplateStyleArgs = DefinedFieldsInRecord<MutationUpdateTemplateStyleArgs, RequiredDbNotUserTemplateStyleKeys> & AutodefinableTemplateStylePart;

export type StrictCreateTemplateStyleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTemplateStyleArgs, AutodefinableTemplateStyleKeys>;
export type MutationCreateTemplateStyleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTemplateStyleArgs, AutodefinableTemplateStyleKeys>;
export type MutationUpdateTemplateStyleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTemplateStyleArgs, AutodefinableTemplateStyleKeys>;

export class TemplateStylesService extends BaseService<
  TemplateStyle,
  MutationCreateTemplateStyleArgs,
  MutationUpdateTemplateStyleArgs,
  MutationRemoveTemplateStyleArgs,
  QueryAllTemplateStylesArgs,
  AutodefinableTemplateStyleKeys,
  ForbidenForUserTemplateStyleKeys,
  RequiredDbNotUserTemplateStyleKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.templateStyle, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableTemplateStylePart> => currentData as T & AutodefinableTemplateStylePart;
}
