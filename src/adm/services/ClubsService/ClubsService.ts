import {
  MutationCreateClubArgs,
  MutationUpdateClubArgs,
  MutationRemoveClubArgs,
  QueryAllClubsArgs,
  Club,
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

export type AutodefinableClubKeys = 'createdByManagerId';
export type ForbidenForUserClubKeys = 'createdByManagerId' | 'lastChangedByManagerId';
export type RequiredDbNotUserClubKeys = 'createdByManagerId';

export type AutodefinableClubPart = DefinedRecord<Pick<MutationCreateClubArgs, AutodefinableClubKeys>>;

export type ReliableClubCreateUserInput =
  Omit<MutationCreateClubArgs, ForbidenForUserClubKeys>
  & AutodefinableClubPart;

export type AllowedClubForUserCreateInput = Omit<MutationCreateClubArgs, ForbidenForUserClubKeys>;

export type StrictCreateClubArgs = DefinedFieldsInRecord<MutationCreateClubArgs, RequiredDbNotUserClubKeys> & AutodefinableClubPart;
export type StrictUpdateClubArgs = DefinedFieldsInRecord<MutationUpdateClubArgs, RequiredDbNotUserClubKeys> & AutodefinableClubPart;

export type StrictCreateClubArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateClubArgs, AutodefinableClubKeys>;
export type MutationCreateClubArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateClubArgs, AutodefinableClubKeys>;
export type MutationUpdateClubArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateClubArgs, AutodefinableClubKeys>;

export class ClubsService extends BaseService<
  Club,
  MutationCreateClubArgs,
  MutationUpdateClubArgs,
  MutationRemoveClubArgs,
  QueryAllClubsArgs,
  AutodefinableClubKeys,
  ForbidenForUserClubKeys,
  RequiredDbNotUserClubKeys,
  Prisma.ClubDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.club, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableClubPart> => {
      const defaultFieldConstructors = {
        createdByManagerId: async () => ctx.service('profile').getManagerId(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableClubPart;
    };
  }
}
