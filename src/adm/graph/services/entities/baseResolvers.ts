import {
  QueryAllEntitiesArgs,
  Query_AllEntitiesMetaArgs,
  Resolvers,
  MutationCreateEntityArgs,
  MutationUpdateEntityArgs,
  MutationRemoveEntityArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Entity: (_, {id}, {context}: {context: Context}) =>
      context.service('entities').get(id),
    allEntities: (_, params: QueryAllEntitiesArgs, {context}: {context: Context}) =>
      context.service('entities').all(params),
    _allEntitiesMeta: (_, params: Query_AllEntitiesMetaArgs, {context}: {context: Context}) =>
      context.service('entities').meta(params),
  },
  Mutation: {
    createEntity: (_, params: MutationCreateEntityArgs, {context}: {context: Context}) =>
      context.service('entities').create(params, true),
    updateEntity: (_, params: MutationUpdateEntityArgs, {context}: {context: Context}) =>
      context.service('entities').update(params, true),
    removeEntity: (_, params: MutationRemoveEntityArgs, {context}: {context: Context}) =>
      context.service('entities').delete(params),
  },
};

export default queryResolvers;
