import {
  MutationCreateConfigurationVariableArgs,
  MutationUpdateConfigurationVariableArgs,
  MutationRemoveConfigurationVariableArgs,
  QueryAllConfigurationVariablesArgs,
  ConfigurationVariable,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableConfigurationVariableKeys = never;
export type ForbidenForUserConfigurationVariableKeys = never;
export type RequiredDbNotUserConfigurationVariableKeys = never;

export type AutodefinableConfigurationVariablePart = DefinedRecord<Pick<MutationCreateConfigurationVariableArgs, AutodefinableConfigurationVariableKeys>>;

export type ReliableConfigurationVariableCreateUserInput =
  Omit<MutationCreateConfigurationVariableArgs, ForbidenForUserConfigurationVariableKeys>
  & AutodefinableConfigurationVariablePart;

export type AllowedConfigurationVariableForUserCreateInput = Omit<MutationCreateConfigurationVariableArgs, ForbidenForUserConfigurationVariableKeys>;

export type StrictCreateConfigurationVariableArgs = DefinedFieldsInRecord<MutationCreateConfigurationVariableArgs, RequiredDbNotUserConfigurationVariableKeys> & AutodefinableConfigurationVariablePart;
export type StrictUpdateConfigurationVariableArgs = DefinedFieldsInRecord<MutationUpdateConfigurationVariableArgs, RequiredDbNotUserConfigurationVariableKeys> & AutodefinableConfigurationVariablePart;

export type StrictCreateConfigurationVariableArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateConfigurationVariableArgs, AutodefinableConfigurationVariableKeys>;
export type MutationCreateConfigurationVariableArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateConfigurationVariableArgs, AutodefinableConfigurationVariableKeys>;
export type MutationUpdateConfigurationVariableArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateConfigurationVariableArgs, AutodefinableConfigurationVariableKeys>;

export class ConfigurationVariablesService extends BaseService<
  ConfigurationVariable,
  MutationCreateConfigurationVariableArgs,
  MutationUpdateConfigurationVariableArgs,
  MutationRemoveConfigurationVariableArgs,
  QueryAllConfigurationVariablesArgs,
  AutodefinableConfigurationVariableKeys,
  ForbidenForUserConfigurationVariableKeys,
  RequiredDbNotUserConfigurationVariableKeys,
  Prisma.ConfigurationVariableDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.configurationVariable, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
