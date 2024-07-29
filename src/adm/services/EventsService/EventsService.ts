import {
  MutationCreateEventArgs,
  MutationUpdateEventArgs,
  MutationRemoveEventArgs,
  QueryAllEventsArgs,
  Event,
} from '../../../generated/graphql';
import {Context} from '../types';
import initUserHooks from './initUserHooks';
import initBuiltInHooks from './initBuiltInHooks';
import {DocumentBaseService} from '../utils/class/DocumentBaseService';
import * as R from 'ramda';
import config from './config';
import {DefinedFieldsInRecord, DefinedRecord, PartialFieldsInRecord} from '../../../types/utils';
import {Prisma} from '@prisma/client';

// DO NOT EDIT! THIS IS GENERATED FILE

export type AutodefinableEventKeys = 'date';
export type ForbidenForUserEventKeys = never;
export type RequiredDbNotUserEventKeys = 'date';

export type AutodefinableEventPart = DefinedRecord<Pick<MutationCreateEventArgs, AutodefinableEventKeys>>;

export type ReliableEventCreateUserInput =
  Omit<MutationCreateEventArgs, ForbidenForUserEventKeys>
  & AutodefinableEventPart;

export type AllowedEventForUserCreateInput = Omit<MutationCreateEventArgs, ForbidenForUserEventKeys>;

export type StrictCreateEventArgs = DefinedFieldsInRecord<MutationCreateEventArgs, RequiredDbNotUserEventKeys> & AutodefinableEventPart;
export type StrictUpdateEventArgs = DefinedFieldsInRecord<MutationUpdateEventArgs, RequiredDbNotUserEventKeys> & AutodefinableEventPart;

export type StrictCreateEventArgsWithoutAutodefinable = PartialFieldsInRecord<StrictCreateEventArgs, AutodefinableEventKeys>;
export type MutationCreateEventArgsWithoutAutodefinable = PartialFieldsInRecord<MutationCreateEventArgs, AutodefinableEventKeys>;
export type MutationUpdateEventArgsWithoutAutodefinable = PartialFieldsInRecord<MutationUpdateEventArgs, AutodefinableEventKeys>;

export interface EventRegistryEntries {
}

export class EventsService extends DocumentBaseService<
  Event,
  MutationCreateEventArgs,
  MutationUpdateEventArgs,
  MutationRemoveEventArgs,
  QueryAllEventsArgs,
  AutodefinableEventKeys,
  ForbidenForUserEventKeys,
  RequiredDbNotUserEventKeys,
  EventRegistryEntries,
  Prisma.EventDelegate<any>
> {
  constructor(public ctx: Context) {
    super(ctx, ctx.prisma.event, config);
    initBuiltInHooks(this);
    initUserHooks(this);

    this.augmentByDefault = async <T>(
      currentData: Record<string, any>,
    ): Promise<T & AutodefinableEventPart> => {
      const defaultFieldConstructors = {
        date: async () => new Date(),
      };

      const pairedConstructors = R.toPairs(defaultFieldConstructors);

      const resultedPairs: R.KeyValuePair<string, any>[] = [];
      for (const [key, constructor] of pairedConstructors) {
        resultedPairs.push([key, key in currentData && currentData[key] ? currentData[key] : await constructor()]);
      }

      return R.mergeLeft(currentData, R.fromPairs(resultedPairs)) as T & AutodefinableEventPart;
    };
  }
}
