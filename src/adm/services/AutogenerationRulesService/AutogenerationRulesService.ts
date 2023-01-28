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
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableAutogenerationRuleKeys = 'ignoreVersionOnHistory';
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
  RequiredDbNotUserAutogenerationRuleKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.autogenerationRule, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableAutogenerationRulePart> => {
      const defaultFieldConstructors = {
        ignoreVersionOnHistory: async () => false,
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableAutogenerationRulePart;
    };
  }
}
