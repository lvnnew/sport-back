import {
  QueryAllEventTypesArgs,
  Query_AllEventTypesMetaArgs,
  Resolvers,
  MutationCreateEventTypeArgs,
  MutationUpdateEventTypeArgs,
  MutationRemoveEventTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    EventType: (_, {id}, {context}: {context: Context}) =>
      context.service('eventTypes').get(id, true),
    allEventTypes:
      (_, params: QueryAllEventTypesArgs, {context}: {context: Context}) =>
        context.service('eventTypes').all(params, true),
    _allEventTypesMeta:
      (_, params: Query_AllEventTypesMetaArgs, {context}: {context: Context}) =>
        context.service('eventTypes').meta(params, true),
  },
  Mutation: {
    createEventType:
      (_, params: MutationCreateEventTypeArgs, {context}: {context: Context}) =>
        context.service('eventTypes').create(params, true),
    updateEventType:
      (_, params: MutationUpdateEventTypeArgs, {context}: {context: Context}) =>
        context.service('eventTypes').update(params, true),
    removeEventType:
      (_, params: MutationRemoveEventTypeArgs, {context}: {context: Context}) =>
        context.service('eventTypes').delete(params, true),
  },
};

export default queryResolvers;
