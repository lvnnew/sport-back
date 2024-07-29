import {
  MutationCreateOrganizatorArgs,
  MutationUpdateOrganizatorArgs,
  MutationRemoveOrganizatorArgs,
  QueryAllOrganizatorsArgs,
  Organizator,
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

export type AutodefinableOrganizatorKeys = 'createdByManagerId';
export type ForbidenForUserOrganizatorKeys = 'createdByManagerId' | 'lastChangedByManagerId';
export type RequiredDbNotUserOrganizatorKeys = 'createdByManagerId';

export type AutodefinableOrganizatorPart = DefinedRecord<Pick<MutationCreateOrganizatorArgs, AutodefinableOrganizatorKeys>>;

export type ReliableOrganizatorCreateUserInput =
  Omit<MutationCreateOrganizatorArgs, ForbidenForUserOrganizatorKeys>
  & AutodefinableOrganizatorPart;

export type AllowedOrganizatorForUserCreateInput = Omit<MutationCreateOrganizatorArgs, ForbidenForUserOrganizatorKeys>;

export type StrictCreateOrganizatorArgs = DefinedFieldsInRecord<MutationCreateOrganizatorArgs, RequiredDbNotUserOrganizatorKeys> & AutodefinableOrganizatorPart;
export type StrictUpdateOrganizatorArgs = DefinedFieldsInRecord<MutationUpdateOrganizatorArgs, RequiredDbNotUserOrganizatorKeys> & AutodefinableOrganizatorPart;

export type StrictCreateOrganizatorArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateOrganizatorArgs, AutodefinableOrganizatorKeys>;
export type MutationCreateOrganizatorArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateOrganizatorArgs, AutodefinableOrganizatorKeys>;
export type MutationUpdateOrganizatorArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateOrganizatorArgs, AutodefinableOrganizatorKeys>;

export class OrganizatorsService extends BaseService<
  Organizator,
  MutationCreateOrganizatorArgs,
  MutationUpdateOrganizatorArgs,
  MutationRemoveOrganizatorArgs,
  QueryAllOrganizatorsArgs,
  AutodefinableOrganizatorKeys,
  ForbidenForUserOrganizatorKeys,
  RequiredDbNotUserOrganizatorKeys,
  Prisma.OrganizatorDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.organizator, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableOrganizatorPart> => {
      const defaultFieldConstructors = {
        createdByManagerId: async () => ctx.service('profile').getManagerId(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableOrganizatorPart;
    };
  }
}
