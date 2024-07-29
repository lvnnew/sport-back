import {
  MutationCreatePlayerForMatchRequestArgs,
  MutationUpdatePlayerForMatchRequestArgs,
  MutationRemovePlayerForMatchRequestArgs,
  QueryAllPlayerForMatchRequestsArgs,
  PlayerForMatchRequest,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinablePlayerForMatchRequestKeys = never;
export type ForbidenForUserPlayerForMatchRequestKeys = never;
export type RequiredDbNotUserPlayerForMatchRequestKeys = never;

export type AutodefinablePlayerForMatchRequestPart = DefinedRecord<Pick<MutationCreatePlayerForMatchRequestArgs, AutodefinablePlayerForMatchRequestKeys>>;

export type ReliablePlayerForMatchRequestCreateUserInput =
  Omit<MutationCreatePlayerForMatchRequestArgs, ForbidenForUserPlayerForMatchRequestKeys>
  & AutodefinablePlayerForMatchRequestPart;

export type AllowedPlayerForMatchRequestForUserCreateInput = Omit<MutationCreatePlayerForMatchRequestArgs, ForbidenForUserPlayerForMatchRequestKeys>;

export type StrictCreatePlayerForMatchRequestArgs = DefinedFieldsInRecord<MutationCreatePlayerForMatchRequestArgs, RequiredDbNotUserPlayerForMatchRequestKeys> & AutodefinablePlayerForMatchRequestPart;
export type StrictUpdatePlayerForMatchRequestArgs = DefinedFieldsInRecord<MutationUpdatePlayerForMatchRequestArgs, RequiredDbNotUserPlayerForMatchRequestKeys> & AutodefinablePlayerForMatchRequestPart;

export type StrictCreatePlayerForMatchRequestArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreatePlayerForMatchRequestArgs, AutodefinablePlayerForMatchRequestKeys>;
export type MutationCreatePlayerForMatchRequestArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreatePlayerForMatchRequestArgs, AutodefinablePlayerForMatchRequestKeys>;
export type MutationUpdatePlayerForMatchRequestArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdatePlayerForMatchRequestArgs, AutodefinablePlayerForMatchRequestKeys>;

export class PlayerForMatchRequestsService extends BaseService<
  PlayerForMatchRequest,
  MutationCreatePlayerForMatchRequestArgs,
  MutationUpdatePlayerForMatchRequestArgs,
  MutationRemovePlayerForMatchRequestArgs,
  QueryAllPlayerForMatchRequestsArgs,
  AutodefinablePlayerForMatchRequestKeys,
  ForbidenForUserPlayerForMatchRequestKeys,
  RequiredDbNotUserPlayerForMatchRequestKeys,
  Prisma.PlayerForMatchRequestDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.playerForMatchRequest, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
