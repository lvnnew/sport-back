import {
  QueryAllEventTypeCategoriesArgs,
  Query_AllEventTypeCategoriesMetaArgs,
  Resolvers,
  MutationCreateEventTypeCategoryArgs,
  MutationUpdateEventTypeCategoryArgs,
  MutationRemoveEventTypeCategoryArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    EventTypeCategory: (_, {id}, {context}: {context: Context}) =>
      context.service('eventTypeCategories').get(id, true),
    allEventTypeCategories:
      (_, params: QueryAllEventTypeCategoriesArgs, {context}: {context: Context}) =>
        context.service('eventTypeCategories').all(params, true),
    _allEventTypeCategoriesMeta:
      (_, params: Query_AllEventTypeCategoriesMetaArgs, {context}: {context: Context}) =>
        context.service('eventTypeCategories').meta(params, true),
  },
  Mutation: {
    createEventTypeCategory:
      (_, params: MutationCreateEventTypeCategoryArgs, {context}: {context: Context}) =>
        context.service('eventTypeCategories').create(params, true),
    updateEventTypeCategory:
      (_, params: MutationUpdateEventTypeCategoryArgs, {context}: {context: Context}) =>
        context.service('eventTypeCategories').update(params, true),
    removeEventTypeCategory:
      (_, params: MutationRemoveEventTypeCategoryArgs, {context}: {context: Context}) =>
        context.service('eventTypeCategories').delete(params, true),
  },
};

export default queryResolvers;
