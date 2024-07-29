import {
  MutationCreateTeamArgs,
  MutationUpdateTeamArgs,
  MutationRemoveTeamArgs,
  QueryAllTeamsArgs,
  Team,
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

export type AutodefinableTeamKeys = 'createdByManagerId';
export type ForbidenForUserTeamKeys = 'createdByManagerId' | 'lastChangedByManagerId';
export type RequiredDbNotUserTeamKeys = 'createdByManagerId';

export type AutodefinableTeamPart = DefinedRecord<Pick<MutationCreateTeamArgs, AutodefinableTeamKeys>>;

export type ReliableTeamCreateUserInput =
  Omit<MutationCreateTeamArgs, ForbidenForUserTeamKeys>
  & AutodefinableTeamPart;

export type AllowedTeamForUserCreateInput = Omit<MutationCreateTeamArgs, ForbidenForUserTeamKeys>;

export type StrictCreateTeamArgs = DefinedFieldsInRecord<MutationCreateTeamArgs, RequiredDbNotUserTeamKeys> & AutodefinableTeamPart;
export type StrictUpdateTeamArgs = DefinedFieldsInRecord<MutationUpdateTeamArgs, RequiredDbNotUserTeamKeys> & AutodefinableTeamPart;

export type StrictCreateTeamArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateTeamArgs, AutodefinableTeamKeys>;
export type MutationCreateTeamArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateTeamArgs, AutodefinableTeamKeys>;
export type MutationUpdateTeamArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateTeamArgs, AutodefinableTeamKeys>;

export class TeamsService extends BaseService<
  Team,
  MutationCreateTeamArgs,
  MutationUpdateTeamArgs,
  MutationRemoveTeamArgs,
  QueryAllTeamsArgs,
  AutodefinableTeamKeys,
  ForbidenForUserTeamKeys,
  RequiredDbNotUserTeamKeys,
  Prisma.TeamDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.team, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableTeamPart> => {
      const defaultFieldConstructors = {
        createdByManagerId: async () => ctx.service('profile').getManagerId(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableTeamPart;
    };
  }
}
