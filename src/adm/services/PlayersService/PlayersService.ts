import {
  MutationCreatePlayerArgs,
  MutationUpdatePlayerArgs,
  MutationRemovePlayerArgs,
  QueryAllPlayersArgs,
  Player,
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

export type AutodefinablePlayerKeys = 'createdByManagerId';
export type ForbidenForUserPlayerKeys = 'title' | 'playerName' | 'createdByManagerId' | 'lastChangedByManagerId';
export type RequiredDbNotUserPlayerKeys = 'title' | 'createdByManagerId';

export type AutodefinablePlayerPart = DefinedRecord<Pick<MutationCreatePlayerArgs, AutodefinablePlayerKeys>>;

export type ReliablePlayerCreateUserInput =
  Omit<MutationCreatePlayerArgs, ForbidenForUserPlayerKeys>
  & AutodefinablePlayerPart;

export type AllowedPlayerForUserCreateInput = Omit<MutationCreatePlayerArgs, ForbidenForUserPlayerKeys>;

export type StrictCreatePlayerArgs = DefinedFieldsInRecord<MutationCreatePlayerArgs, RequiredDbNotUserPlayerKeys> & AutodefinablePlayerPart;
export type StrictUpdatePlayerArgs = DefinedFieldsInRecord<MutationUpdatePlayerArgs, RequiredDbNotUserPlayerKeys> & AutodefinablePlayerPart;

export type StrictCreatePlayerArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerArgs, AutodefinablePlayerKeys>;
export type MutationCreatePlayerArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerArgs, AutodefinablePlayerKeys>;
export type MutationUpdatePlayerArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerArgs, AutodefinablePlayerKeys>;

export class PlayersService extends BaseService<
  Player,
  MutationCreatePlayerArgs,
  MutationUpdatePlayerArgs,
  MutationRemovePlayerArgs,
  QueryAllPlayersArgs,
  AutodefinablePlayerKeys,
  ForbidenForUserPlayerKeys,
  RequiredDbNotUserPlayerKeys,
  Prisma.PlayerDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.player, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinablePlayerPart> => {
      const defaultFieldConstructors = {
        createdByManagerId: async () => ctx.service('profile').getManagerId(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinablePlayerPart;
    };
  }
}
