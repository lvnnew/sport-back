import {
  MutationCreateRoleArgs,
  MutationUpdateRoleArgs,
  MutationRemoveRoleArgs,
  QueryAllRolesArgs,
  Role,
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

export type AutodefinableRoleKeys = 'hasAllPermissions' | 'allTenantsAvailable';
export type ForbidenForUserRoleKeys = never;
export type RequiredDbNotUserRoleKeys = never;

export type AutodefinableRolePart = DefinedRecord<Pick<MutationCreateRoleArgs, AutodefinableRoleKeys>>;

export type ReliableRoleCreateUserInput =
  Omit<MutationCreateRoleArgs, ForbidenForUserRoleKeys>
  & AutodefinableRolePart;

export type AllowedRoleForUserCreateInput = Omit<MutationCreateRoleArgs, ForbidenForUserRoleKeys>;

export type StrictCreateRoleArgs = DefinedFieldsInRecord<MutationCreateRoleArgs, RequiredDbNotUserRoleKeys> & AutodefinableRolePart;
export type StrictUpdateRoleArgs = DefinedFieldsInRecord<MutationUpdateRoleArgs, RequiredDbNotUserRoleKeys> & AutodefinableRolePart;

export type StrictCreateRoleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateRoleArgs, AutodefinableRoleKeys>;
export type MutationCreateRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateRoleArgs, AutodefinableRoleKeys>;
export type MutationUpdateRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateRoleArgs, AutodefinableRoleKeys>;

export class RolesService extends BaseService<
  Role,
  MutationCreateRoleArgs,
  MutationUpdateRoleArgs,
  MutationRemoveRoleArgs,
  QueryAllRolesArgs,
  AutodefinableRoleKeys,
  ForbidenForUserRoleKeys,
  RequiredDbNotUserRoleKeys,
  Prisma.RoleDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.role, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableRolePart> => {
      const defaultFieldConstructors = {
        hasAllPermissions: async () => false,
        allTenantsAvailable: async () => false,
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableRolePart;
    };
  }
}
