import {
  QueryAllMatchPeriodMarkupsArgs,
  Query_AllMatchPeriodMarkupsMetaArgs,
  Resolvers,
  MutationCreateMatchPeriodMarkupArgs,
  MutationUpdateMatchPeriodMarkupArgs,
  MutationRemoveMatchPeriodMarkupArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MatchPeriodMarkup: (_, {id}, {context}: {context: Context}) =>
      context.service('matchPeriodMarkups').get(id, true),
    allMatchPeriodMarkups:
      (_, params: QueryAllMatchPeriodMarkupsArgs, {context}: {context: Context}) =>
        context.service('matchPeriodMarkups').all(params, true),
    _allMatchPeriodMarkupsMeta:
      (_, params: Query_AllMatchPeriodMarkupsMetaArgs, {context}: {context: Context}) =>
        context.service('matchPeriodMarkups').meta(params, true),
  },
  Mutation: {
    createMatchPeriodMarkup:
      (_, params: MutationCreateMatchPeriodMarkupArgs, {context}: {context: Context}) =>
        context.service('matchPeriodMarkups').create(params, true),
    updateMatchPeriodMarkup:
      (_, params: MutationUpdateMatchPeriodMarkupArgs, {context}: {context: Context}) =>
        context.service('matchPeriodMarkups').update(params, true),
    removeMatchPeriodMarkup:
      (_, params: MutationRemoveMatchPeriodMarkupArgs, {context}: {context: Context}) =>
        context.service('matchPeriodMarkups').delete(params, true),
  },
};

export default queryResolvers;
