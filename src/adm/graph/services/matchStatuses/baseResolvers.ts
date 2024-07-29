import {
  QueryAllMatchStatusesArgs,
  Query_AllMatchStatusesMetaArgs,
  Resolvers,
  MutationCreateMatchStatusArgs,
  MutationUpdateMatchStatusArgs,
  MutationRemoveMatchStatusArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MatchStatus: (_, {id}, {context}: {context: Context}) =>
      context.service('matchStatuses').get(id, true),
    allMatchStatuses:
      (_, params: QueryAllMatchStatusesArgs, {context}: {context: Context}) =>
        context.service('matchStatuses').all(params, true),
    _allMatchStatusesMeta:
      (_, params: Query_AllMatchStatusesMetaArgs, {context}: {context: Context}) =>
        context.service('matchStatuses').meta(params, true),
  },
  Mutation: {
    createMatchStatus:
      (_, params: MutationCreateMatchStatusArgs, {context}: {context: Context}) =>
        context.service('matchStatuses').create(params, true),
    updateMatchStatus:
      (_, params: MutationUpdateMatchStatusArgs, {context}: {context: Context}) =>
        context.service('matchStatuses').update(params, true),
    removeMatchStatus:
      (_, params: MutationRemoveMatchStatusArgs, {context}: {context: Context}) =>
        context.service('matchStatuses').delete(params, true),
  },
};

export default queryResolvers;
