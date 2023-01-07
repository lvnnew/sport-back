import {
  MutationCreateManagerLoginArgs,
  MutationUpdateManagerLoginArgs,
  MutationRemoveManagerLoginArgs,
  QueryAllManagerLoginsArgs,
  ManagerLogin,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableManagerLoginKeys = 'emailVerified' | 'initialPasswordChanged' | 'locked';
export type ForbidenForUserManagerLoginKeys = never;
export type RequiredDbNotUserManagerLoginKeys = never;

export type AutodefinableManagerLoginPart = DefinedRecord<Pick<MutationCreateManagerLoginArgs, AutodefinableManagerLoginKeys>>;

export type ReliableManagerLoginCreateUserInput =
  Omit<MutationCreateManagerLoginArgs, ForbidenForUserManagerLoginKeys>
  & AutodefinableManagerLoginPart;

export type AllowedManagerLoginForUserCreateInput = Omit<MutationCreateManagerLoginArgs, ForbidenForUserManagerLoginKeys>;

export type StrictCreateManagerLoginArgs = DefinedFieldsInRecord<MutationCreateManagerLoginArgs, RequiredDbNotUserManagerLoginKeys> & AutodefinableManagerLoginPart;
export type StrictUpdateManagerLoginArgs = DefinedFieldsInRecord<MutationUpdateManagerLoginArgs, RequiredDbNotUserManagerLoginKeys> & AutodefinableManagerLoginPart;

export type StrictCreateManagerLoginArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateManagerLoginArgs, AutodefinableManagerLoginKeys>;
export type MutationCreateManagerLoginArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateManagerLoginArgs, AutodefinableManagerLoginKeys>;
export type MutationUpdateManagerLoginArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateManagerLoginArgs, AutodefinableManagerLoginKeys>;

export class ManagerLoginsService extends BaseService<
  ManagerLogin,
  MutationCreateManagerLoginArgs,
  MutationUpdateManagerLoginArgs,
  MutationRemoveManagerLoginArgs,
  QueryAllManagerLoginsArgs,
  AutodefinableManagerLoginKeys,
  ForbidenForUserManagerLoginKeys,
  RequiredDbNotUserManagerLoginKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.managerLogin, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableManagerLoginPart> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ctx = this.ctx;

    const defaultFieldConstructors = {
      emailVerified: async () => false,
      initialPasswordChanged: async () => false,
      locked: async () => false,
    };

    const pairedConstructors = R.toPairs(defaultFieldConstructors);

    const resultedPairs: R.KeyValuePair<string, any>[] = [];
    for (const [key, constructor] of pairedConstructors) {
      resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
    }

    return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableManagerLoginPart;
  };
}
