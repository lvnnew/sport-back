import {
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
  QueryAllDelegationsArgs,
  Delegation,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableDelegationKeys = 'active';
export type ForbidenForUserDelegationKeys = never;
export type RequiredDbNotUserDelegationKeys = never;

export type AutodefinableDelegationPart = DefinedRecord<Pick<MutationCreateDelegationArgs, AutodefinableDelegationKeys>>;

export type ReliableDelegationCreateUserInput =
  Omit<MutationCreateDelegationArgs, ForbidenForUserDelegationKeys>
  & AutodefinableDelegationPart;

export type AllowedDelegationForUserCreateInput = Omit<MutationCreateDelegationArgs, ForbidenForUserDelegationKeys>;

export type StrictCreateDelegationArgs = DefinedFieldsInRecord<MutationCreateDelegationArgs, RequiredDbNotUserDelegationKeys> & AutodefinableDelegationPart;
export type StrictUpdateDelegationArgs = DefinedFieldsInRecord<MutationUpdateDelegationArgs, RequiredDbNotUserDelegationKeys> & AutodefinableDelegationPart;

export type StrictCreateDelegationArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateDelegationArgs, AutodefinableDelegationKeys>;
export type MutationCreateDelegationArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateDelegationArgs, AutodefinableDelegationKeys>;
export type MutationUpdateDelegationArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateDelegationArgs, AutodefinableDelegationKeys>;

export class DelegationsService extends BaseService<
  Delegation,
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
  QueryAllDelegationsArgs,
  AutodefinableDelegationKeys,
  ForbidenForUserDelegationKeys,
  RequiredDbNotUserDelegationKeys,
  Prisma.DelegationDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.delegation, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableDelegationPart> => {
      const defaultFieldConstructors = {
        active: async () => false,
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableDelegationPart;
    };
  }
}
