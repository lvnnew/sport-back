import {
  QueryAllEntitiesTrackingsArgs,
  Query_AllEntitiesTrackingsMetaArgs,
  Resolvers,
  MutationCreateEntitiesTrackingArgs,
  MutationUpdateEntitiesTrackingArgs,
  MutationRemoveEntitiesTrackingArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    EntitiesTracking: (_, {id}, {context}: {context: Context}) =>
      context.service('entitiesTrackings').get(id, true),
    allEntitiesTrackings:
      (_, params: QueryAllEntitiesTrackingsArgs, {context}: {context: Context}) =>
        context.service('entitiesTrackings').all(params, true),
    _allEntitiesTrackingsMeta:
      (_, params: Query_AllEntitiesTrackingsMetaArgs, {context}: {context: Context}) =>
        context.service('entitiesTrackings').meta(params, true),
  },
  Mutation: {
    createEntitiesTracking:
      (_, params: MutationCreateEntitiesTrackingArgs, {context}: {context: Context}) =>
        context.service('entitiesTrackings').create(params, true),
    updateEntitiesTracking:
      (_, params: MutationUpdateEntitiesTrackingArgs, {context}: {context: Context}) =>
        context.service('entitiesTrackings').update(params, true),
    removeEntitiesTracking:
      (_, params: MutationRemoveEntitiesTrackingArgs, {context}: {context: Context}) =>
        context.service('entitiesTrackings').delete(params, true),
  },
};

export default queryResolvers;
