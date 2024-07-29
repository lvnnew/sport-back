import {
  MutationCreateMatchVideoArgs,
  MutationUpdateMatchVideoArgs,
  MutationRemoveMatchVideoArgs,
  QueryAllMatchVideosArgs,
  MatchVideo,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableMatchVideoKeys = never;
export type ForbidenForUserMatchVideoKeys = never;
export type RequiredDbNotUserMatchVideoKeys = never;

export type AutodefinableMatchVideoPart = DefinedRecord<Pick<MutationCreateMatchVideoArgs, AutodefinableMatchVideoKeys>>;

export type ReliableMatchVideoCreateUserInput =
  Omit<MutationCreateMatchVideoArgs, ForbidenForUserMatchVideoKeys>
  & AutodefinableMatchVideoPart;

export type AllowedMatchVideoForUserCreateInput = Omit<MutationCreateMatchVideoArgs, ForbidenForUserMatchVideoKeys>;

export type StrictCreateMatchVideoArgs = DefinedFieldsInRecord<MutationCreateMatchVideoArgs, RequiredDbNotUserMatchVideoKeys> & AutodefinableMatchVideoPart;
export type StrictUpdateMatchVideoArgs = DefinedFieldsInRecord<MutationUpdateMatchVideoArgs, RequiredDbNotUserMatchVideoKeys> & AutodefinableMatchVideoPart;

export type StrictCreateMatchVideoArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateMatchVideoArgs, AutodefinableMatchVideoKeys>;
export type MutationCreateMatchVideoArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateMatchVideoArgs, AutodefinableMatchVideoKeys>;
export type MutationUpdateMatchVideoArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateMatchVideoArgs, AutodefinableMatchVideoKeys>;

export class MatchVideosService extends BaseService<
  MatchVideo,
  MutationCreateMatchVideoArgs,
  MutationUpdateMatchVideoArgs,
  MutationRemoveMatchVideoArgs,
  QueryAllMatchVideosArgs,
  AutodefinableMatchVideoKeys,
  ForbidenForUserMatchVideoKeys,
  RequiredDbNotUserMatchVideoKeys,
  Prisma.MatchVideoDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.matchVideo, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
