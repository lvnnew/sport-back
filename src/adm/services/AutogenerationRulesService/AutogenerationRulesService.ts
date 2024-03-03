import {
  MutationCreateAutogenerationRuleArgs,
  MutationUpdateAutogenerationRuleArgs,
  MutationRemoveAutogenerationRuleArgs,
  QueryAllAutogenerationRulesArgs,
  AutogenerationRule,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAutogenerationRuleKeys = never;
export type ForbidenForUserAutogenerationRuleKeys = never;
export type RequiredDbNotUserAutogenerationRuleKeys = never;

export type AutodefinableAutogenerationRulePart = DefinedRecord<Pick<MutationCreateAutogenerationRuleArgs, AutodefinableAutogenerationRuleKeys>>;

export type ReliableAutogenerationRuleCreateUserInput =
  Omit<MutationCreateAutogenerationRuleArgs, ForbidenForUserAutogenerationRuleKeys>
  & AutodefinableAutogenerationRulePart;

export type AllowedAutogenerationRuleForUserCreateInput = Omit<MutationCreateAutogenerationRuleArgs, ForbidenForUserAutogenerationRuleKeys>;

export type StrictCreateAutogenerationRuleArgs = DefinedFieldsInRecord<MutationCreateAutogenerationRuleArgs, RequiredDbNotUserAutogenerationRuleKeys> & AutodefinableAutogenerationRulePart;
export type StrictUpdateAutogenerationRuleArgs = DefinedFieldsInRecord<MutationUpdateAutogenerationRuleArgs, RequiredDbNotUserAutogenerationRuleKeys> & AutodefinableAutogenerationRulePart;

export type StrictCreateAutogenerationRuleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateAutogenerationRuleArgs, AutodefinableAutogenerationRuleKeys>;
export type MutationCreateAutogenerationRuleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateAutogenerationRuleArgs, AutodefinableAutogenerationRuleKeys>;
export type MutationUpdateAutogenerationRuleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateAutogenerationRuleArgs, AutodefinableAutogenerationRuleKeys>;

export class AutogenerationRulesService extends BaseService<
  AutogenerationRule,
  MutationCreateAutogenerationRuleArgs,
  MutationUpdateAutogenerationRuleArgs,
  MutationRemoveAutogenerationRuleArgs,
  QueryAllAutogenerationRulesArgs,
  AutodefinableAutogenerationRuleKeys,
  ForbidenForUserAutogenerationRuleKeys,
  RequiredDbNotUserAutogenerationRuleKeys,
  Prisma.AutogenerationRuleDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.autogenerationRule, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
