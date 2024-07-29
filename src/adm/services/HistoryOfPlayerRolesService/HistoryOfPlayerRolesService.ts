import {
  MutationCreateHistoryOfPlayerRoleArgs,
  MutationUpdateHistoryOfPlayerRoleArgs,
  MutationRemoveHistoryOfPlayerRoleArgs,
  QueryAllHistoryOfPlayerRolesArgs,
  HistoryOfPlayerRole,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableHistoryOfPlayerRoleKeys = never;
export type ForbidenForUserHistoryOfPlayerRoleKeys = never;
export type RequiredDbNotUserHistoryOfPlayerRoleKeys = never;

export type AutodefinableHistoryOfPlayerRolePart = DefinedRecord<Pick<MutationCreateHistoryOfPlayerRoleArgs, AutodefinableHistoryOfPlayerRoleKeys>>;

export type ReliableHistoryOfPlayerRoleCreateUserInput =
  Omit<MutationCreateHistoryOfPlayerRoleArgs, ForbidenForUserHistoryOfPlayerRoleKeys>
  & AutodefinableHistoryOfPlayerRolePart;

export type AllowedHistoryOfPlayerRoleForUserCreateInput = Omit<MutationCreateHistoryOfPlayerRoleArgs, ForbidenForUserHistoryOfPlayerRoleKeys>;

export type StrictCreateHistoryOfPlayerRoleArgs = DefinedFieldsInRecord<MutationCreateHistoryOfPlayerRoleArgs, RequiredDbNotUserHistoryOfPlayerRoleKeys> & AutodefinableHistoryOfPlayerRolePart;
export type StrictUpdateHistoryOfPlayerRoleArgs = DefinedFieldsInRecord<MutationUpdateHistoryOfPlayerRoleArgs, RequiredDbNotUserHistoryOfPlayerRoleKeys> & AutodefinableHistoryOfPlayerRolePart;

export type StrictCreateHistoryOfPlayerRoleArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateHistoryOfPlayerRoleArgs, AutodefinableHistoryOfPlayerRoleKeys>;
export type MutationCreateHistoryOfPlayerRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateHistoryOfPlayerRoleArgs, AutodefinableHistoryOfPlayerRoleKeys>;
export type MutationUpdateHistoryOfPlayerRoleArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateHistoryOfPlayerRoleArgs, AutodefinableHistoryOfPlayerRoleKeys>;

export class HistoryOfPlayerRolesService extends BaseService<
  HistoryOfPlayerRole,
  MutationCreateHistoryOfPlayerRoleArgs,
  MutationUpdateHistoryOfPlayerRoleArgs,
  MutationRemoveHistoryOfPlayerRoleArgs,
  QueryAllHistoryOfPlayerRolesArgs,
  AutodefinableHistoryOfPlayerRoleKeys,
  ForbidenForUserHistoryOfPlayerRoleKeys,
  RequiredDbNotUserHistoryOfPlayerRoleKeys,
  Prisma.HistoryOfPlayerRoleDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.historyOfPlayerRole, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
