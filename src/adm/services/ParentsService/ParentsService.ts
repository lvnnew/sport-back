import {
  MutationCreateParentArgs,
  MutationUpdateParentArgs,
  MutationRemoveParentArgs,
  QueryAllParentsArgs,
  Parent,
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

export type AutodefinableParentKeys = 'createdByManagerId';
export type ForbidenForUserParentKeys = 'title' | 'createdByManagerId' | 'lastChangedByManagerId';
export type RequiredDbNotUserParentKeys = 'title' | 'createdByManagerId';

export type AutodefinableParentPart = DefinedRecord<Pick<MutationCreateParentArgs, AutodefinableParentKeys>>;

export type ReliableParentCreateUserInput =
  Omit<MutationCreateParentArgs, ForbidenForUserParentKeys>
  & AutodefinableParentPart;

export type AllowedParentForUserCreateInput = Omit<MutationCreateParentArgs, ForbidenForUserParentKeys>;

export type StrictCreateParentArgs = DefinedFieldsInRecord<MutationCreateParentArgs, RequiredDbNotUserParentKeys> & AutodefinableParentPart;
export type StrictUpdateParentArgs = DefinedFieldsInRecord<MutationUpdateParentArgs, RequiredDbNotUserParentKeys> & AutodefinableParentPart;

export type StrictCreateParentArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateParentArgs, AutodefinableParentKeys>;
export type MutationCreateParentArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateParentArgs, AutodefinableParentKeys>;
export type MutationUpdateParentArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateParentArgs, AutodefinableParentKeys>;

export class ParentsService extends BaseService<
  Parent,
  MutationCreateParentArgs,
  MutationUpdateParentArgs,
  MutationRemoveParentArgs,
  QueryAllParentsArgs,
  AutodefinableParentKeys,
  ForbidenForUserParentKeys,
  RequiredDbNotUserParentKeys,
  Prisma.ParentDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.parent, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableParentPart> => {
      const defaultFieldConstructors = {
        createdByManagerId: async () => ctx.service('profile').getManagerId(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableParentPart;
    };
  }
}
