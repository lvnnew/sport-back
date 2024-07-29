import {
  QueryAllEventsArgs,
  Query_AllEventsMetaArgs,
  Resolvers,
  MutationCreateEventArgs,
  MutationUpdateEventArgs,
  MutationRemoveEventArgs,
  MutationRePostEventArgs,

} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Event: (_, {id}, {context}: {context: Context}) =>
      context.service('events').get(id, true),
    allEvents:
      (_, params: QueryAllEventsArgs, {context}: {context: Context}) =>
        context.service('events').all(params, true),
    _allEventsMeta:
      (_, params: Query_AllEventsMetaArgs, {context}: {context: Context}) =>
        context.service('events').meta(params, true),
  },
  Mutation: {
    createEvent:
      (_, params: MutationCreateEventArgs, {context}: {context: Context}) =>
        context.service('events').create(params, true),
    updateEvent:
      (_, params: MutationUpdateEventArgs, {context}: {context: Context}) =>
        context.service('events').update(params, true),
    removeEvent:
      (_, params: MutationRemoveEventArgs, {context}: {context: Context}) =>
        context.service('events').delete(params, true),
    rePostEvent:
      (_, params: MutationRePostEventArgs, {context}: {context: Context}) =>
        context.service('events').rePost(params.id, true),
  },
};

export default queryResolvers;
