import {
  QueryAllMatchesArgs,
  Query_AllMatchesMetaArgs,
  Resolvers,
  MutationCreateMatchArgs,
  MutationUpdateMatchArgs,
  MutationRemoveMatchArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Match: (_, {id}, {context}: {context: Context}) =>
      context.service('matches').get(id, true),
    allMatches:
      (_, params: QueryAllMatchesArgs, {context}: {context: Context}) =>
        context.service('matches').all(params, true),
    _allMatchesMeta:
      (_, params: Query_AllMatchesMetaArgs, {context}: {context: Context}) =>
        context.service('matches').meta(params, true),
  },
  Mutation: {
    createMatch:
      (_, params: MutationCreateMatchArgs, {context}: {context: Context}) =>
        context.service('matches').create(params, true),
    updateMatch:
      (_, params: MutationUpdateMatchArgs, {context}: {context: Context}) =>
        context.service('matches').update(params, true),
    removeMatch:
      (_, params: MutationRemoveMatchArgs, {context}: {context: Context}) =>
        context.service('matches').delete(params, true),
  },
};

export default queryResolvers;
