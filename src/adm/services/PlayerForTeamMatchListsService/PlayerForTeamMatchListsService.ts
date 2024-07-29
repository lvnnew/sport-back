import {
  MutationCreatePlayerForTeamMatchListArgs,
  MutationUpdatePlayerForTeamMatchListArgs,
  MutationRemovePlayerForTeamMatchListArgs,
  QueryAllPlayerForTeamMatchListsArgs,
  PlayerForTeamMatchList,
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

export type AutodefinablePlayerForTeamMatchListKeys = 'onField';
export type ForbidenForUserPlayerForTeamMatchListKeys = 'onField';
export type RequiredDbNotUserPlayerForTeamMatchListKeys = never;

export type AutodefinablePlayerForTeamMatchListPart = DefinedRecord<Pick<MutationCreatePlayerForTeamMatchListArgs, AutodefinablePlayerForTeamMatchListKeys>>;

export type ReliablePlayerForTeamMatchListCreateUserInput =
  Omit<MutationCreatePlayerForTeamMatchListArgs, ForbidenForUserPlayerForTeamMatchListKeys>
  & AutodefinablePlayerForTeamMatchListPart;

export type AllowedPlayerForTeamMatchListForUserCreateInput = Omit<MutationCreatePlayerForTeamMatchListArgs, ForbidenForUserPlayerForTeamMatchListKeys>;

export type StrictCreatePlayerForTeamMatchListArgs = DefinedFieldsInRecord<MutationCreatePlayerForTeamMatchListArgs, RequiredDbNotUserPlayerForTeamMatchListKeys> & AutodefinablePlayerForTeamMatchListPart;
export type StrictUpdatePlayerForTeamMatchListArgs = DefinedFieldsInRecord<MutationUpdatePlayerForTeamMatchListArgs, RequiredDbNotUserPlayerForTeamMatchListKeys> & AutodefinablePlayerForTeamMatchListPart;

export type StrictCreatePlayerForTeamMatchListArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerForTeamMatchListArgs, AutodefinablePlayerForTeamMatchListKeys>;
export type MutationCreatePlayerForTeamMatchListArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerForTeamMatchListArgs, AutodefinablePlayerForTeamMatchListKeys>;
export type MutationUpdatePlayerForTeamMatchListArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerForTeamMatchListArgs, AutodefinablePlayerForTeamMatchListKeys>;

export class PlayerForTeamMatchListsService extends BaseService<
  PlayerForTeamMatchList,
  MutationCreatePlayerForTeamMatchListArgs,
  MutationUpdatePlayerForTeamMatchListArgs,
  MutationRemovePlayerForTeamMatchListArgs,
  QueryAllPlayerForTeamMatchListsArgs,
  AutodefinablePlayerForTeamMatchListKeys,
  ForbidenForUserPlayerForTeamMatchListKeys,
  RequiredDbNotUserPlayerForTeamMatchListKeys,
  Prisma.PlayerForTeamMatchListDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.playerForTeamMatchList, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinablePlayerForTeamMatchListPart> => {
      const defaultFieldConstructors = {
        onField: async () => false,
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinablePlayerForTeamMatchListPart;
    };
  }
}
