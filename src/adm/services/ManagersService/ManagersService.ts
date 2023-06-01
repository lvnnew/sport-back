import {
  MutationCreateManagerArgs,
  MutationUpdateManagerArgs,
  MutationRemoveManagerArgs,
  QueryAllManagersArgs,
  Manager,
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

export type AutodefinableManagerKeys = 'headOfUnit' | 'active';
export type ForbidenForUserManagerKeys = 'tenantId';
export type RequiredDbNotUserManagerKeys = never;

export type AutodefinableManagerPart = DefinedRecord<Pick<MutationCreateManagerArgs, AutodefinableManagerKeys>>;

export type ReliableManagerCreateUserInput =
  Omit<MutationCreateManagerArgs, ForbidenForUserManagerKeys>
  & AutodefinableManagerPart;

export type AllowedManagerForUserCreateInput = Omit<MutationCreateManagerArgs, ForbidenForUserManagerKeys>;

export type StrictCreateManagerArgs = DefinedFieldsInRecord<MutationCreateManagerArgs, RequiredDbNotUserManagerKeys> & AutodefinableManagerPart;
export type StrictUpdateManagerArgs = DefinedFieldsInRecord<MutationUpdateManagerArgs, RequiredDbNotUserManagerKeys> & AutodefinableManagerPart;

export type StrictCreateManagerArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateManagerArgs, AutodefinableManagerKeys>;
export type MutationCreateManagerArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateManagerArgs, AutodefinableManagerKeys>;
export type MutationUpdateManagerArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateManagerArgs, AutodefinableManagerKeys>;

export class ManagersService extends BaseService<
  Manager,
  MutationCreateManagerArgs,
  MutationUpdateManagerArgs,
  MutationRemoveManagerArgs,
  QueryAllManagersArgs,
  AutodefinableManagerKeys,
  ForbidenForUserManagerKeys,
  RequiredDbNotUserManagerKeys,
  Prisma.ManagerDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.manager, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableManagerPart> => {
      const defaultFieldConstructors = {
        headOfUnit: async () => false,
        active: async () => true,
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableManagerPart;
    };
  }
}
