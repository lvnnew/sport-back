import {
  MutationCreateManagerLoginTypeArgs,
  MutationUpdateManagerLoginTypeArgs,
  MutationRemoveManagerLoginTypeArgs,
  QueryAllManagerLoginTypesArgs,
  ManagerLoginType,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableManagerLoginTypeKeys = never;
export type ForbidenForUserManagerLoginTypeKeys = never;
export type RequiredDbNotUserManagerLoginTypeKeys = never;

export type AutodefinableManagerLoginTypePart = DefinedRecord<Pick<MutationCreateManagerLoginTypeArgs, AutodefinableManagerLoginTypeKeys>>;

export type ReliableManagerLoginTypeCreateUserInput =
  Omit<MutationCreateManagerLoginTypeArgs, ForbidenForUserManagerLoginTypeKeys>
  & AutodefinableManagerLoginTypePart;

export type AllowedManagerLoginTypeForUserCreateInput = Omit<MutationCreateManagerLoginTypeArgs, ForbidenForUserManagerLoginTypeKeys>;

export type StrictCreateManagerLoginTypeArgs = DefinedFieldsInRecord<MutationCreateManagerLoginTypeArgs, RequiredDbNotUserManagerLoginTypeKeys> & AutodefinableManagerLoginTypePart;
export type StrictUpdateManagerLoginTypeArgs = DefinedFieldsInRecord<MutationUpdateManagerLoginTypeArgs, RequiredDbNotUserManagerLoginTypeKeys> & AutodefinableManagerLoginTypePart;

export type StrictCreateManagerLoginTypeArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateManagerLoginTypeArgs, AutodefinableManagerLoginTypeKeys>;
export type MutationCreateManagerLoginTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateManagerLoginTypeArgs, AutodefinableManagerLoginTypeKeys>;
export type MutationUpdateManagerLoginTypeArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateManagerLoginTypeArgs, AutodefinableManagerLoginTypeKeys>;

export class ManagerLoginTypesService extends BaseService<
  ManagerLoginType,
  MutationCreateManagerLoginTypeArgs,
  MutationUpdateManagerLoginTypeArgs,
  MutationRemoveManagerLoginTypeArgs,
  QueryAllManagerLoginTypesArgs,
  AutodefinableManagerLoginTypeKeys,
  ForbidenForUserManagerLoginTypeKeys,
  RequiredDbNotUserManagerLoginTypeKeys,
  Prisma.ManagerLoginTypeDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.managerLoginType, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }
}
