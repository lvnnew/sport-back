import {
  QueryAllAggregateTrackingsArgs,
  Query_AllAggregateTrackingsMetaArgs,
  Resolvers,
  MutationCreateAggregateTrackingArgs,
  MutationUpdateAggregateTrackingArgs,
  MutationRemoveAggregateTrackingArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AggregateTracking: (_, {id}, {context}: {context: Context}) =>
      context.service('aggregateTrackings').get(id),
    allAggregateTrackings:
      (_, params: QueryAllAggregateTrackingsArgs, {context}: {context: Context}) =>
        context.service('aggregateTrackings').all(params),
    _allAggregateTrackingsMeta:
      (_, params: Query_AllAggregateTrackingsMetaArgs, {context}: {context: Context}) =>
        context.service('aggregateTrackings').meta(params),
  },
  Mutation: {
    createAggregateTracking:
      (_, params: MutationCreateAggregateTrackingArgs, {context}: {context: Context}) =>
        context.service('aggregateTrackings').create(params, true),
    updateAggregateTracking:
      (_, params: MutationUpdateAggregateTrackingArgs, {context}: {context: Context}) =>
        context.service('aggregateTrackings').update(params, true),
    removeAggregateTracking:
      (_, params: MutationRemoveAggregateTrackingArgs, {context}: {context: Context}) =>
        context.service('aggregateTrackings').delete(params),
  },
};

export default queryResolvers;
