import {
  MutationCreateFileArgs,
  MutationUpdateFileArgs,
  MutationRemoveFileArgs,
  QueryAllFilesArgs,
  File,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {BaseService} from '../utils/class/BaseService';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableFileKeys = never;
export type ForbidenForUserFileKeys = never;
export type RequiredDbNotUserFileKeys = never;

export type AutodefinableFilePart = DefinedRecord<Pick<MutationCreateFileArgs, AutodefinableFileKeys>>;

export type ReliableFileCreateUserInput =
  Omit<MutationCreateFileArgs, ForbidenForUserFileKeys>
  & AutodefinableFilePart;

export type AllowedFileForUserCreateInput = Omit<MutationCreateFileArgs, ForbidenForUserFileKeys>;

export type StrictCreateFileArgs = DefinedFieldsInRecord<MutationCreateFileArgs, RequiredDbNotUserFileKeys> & AutodefinableFilePart;
export type StrictUpdateFileArgs = DefinedFieldsInRecord<MutationUpdateFileArgs, RequiredDbNotUserFileKeys> & AutodefinableFilePart;

export type StrictCreateFileArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateFileArgs, AutodefinableFileKeys>;
export type MutationCreateFileArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateFileArgs, AutodefinableFileKeys>;
export type MutationUpdateFileArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateFileArgs, AutodefinableFileKeys>;

export class FilesService extends BaseService<
  File,
  MutationCreateFileArgs,
  MutationUpdateFileArgs,
  MutationRemoveFileArgs,
  QueryAllFilesArgs,
  AutodefinableFileKeys,
  ForbidenForUserFileKeys,
  RequiredDbNotUserFileKeys
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.file, config);
    initBuiltInHooks(this);
    initUserHooks(this);
  }

  augmentByDefault = async <T>(
    currentData: Record<string, any>,
  ): Promise<T & AutodefinableFilePart> => currentData as T & AutodefinableFilePart;
}
