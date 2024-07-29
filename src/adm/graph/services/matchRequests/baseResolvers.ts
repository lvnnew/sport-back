import {
  QueryAllMatchRequestsArgs,
  Query_AllMatchRequestsMetaArgs,
  Resolvers,
  MutationCreateMatchRequestArgs,
  MutationUpdateMatchRequestArgs,
  MutationRemoveMatchRequestArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MatchRequest: (_, {id}, {context}: {context: Context}) =>
      context.service('matchRequests').get(id, true),
    allMatchRequests:
      (_, params: QueryAllMatchRequestsArgs, {context}: {context: Context}) =>
        context.service('matchRequests').all(params, true),
    _allMatchRequestsMeta:
      (_, params: Query_AllMatchRequestsMetaArgs, {context}: {context: Context}) =>
        context.service('matchRequests').meta(params, true),
  },
  Mutation: {
    createMatchRequest:
      (_, params: MutationCreateMatchRequestArgs, {context}: {context: Context}) =>
        context.service('matchRequests').create(params, true),
    updateMatchRequest:
      (_, params: MutationUpdateMatchRequestArgs, {context}: {context: Context}) =>
        context.service('matchRequests').update(params, true),
    removeMatchRequest:
      (_, params: MutationRemoveMatchRequestArgs, {context}: {context: Context}) =>
        context.service('matchRequests').delete(params, true),
  },
};

export default queryResolvers;
