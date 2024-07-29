import {
  QueryAllPlayerForMatchRequestsArgs,
  Query_AllPlayerForMatchRequestsMetaArgs,
  Resolvers,
  MutationCreatePlayerForMatchRequestArgs,
  MutationUpdatePlayerForMatchRequestArgs,
  MutationRemovePlayerForMatchRequestArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PlayerForMatchRequest: (_, {id}, {context}: {context: Context}) =>
      context.service('playerForMatchRequests').get(id, true),
    allPlayerForMatchRequests:
      (_, params: QueryAllPlayerForMatchRequestsArgs, {context}: {context: Context}) =>
        context.service('playerForMatchRequests').all(params, true),
    _allPlayerForMatchRequestsMeta:
      (_, params: Query_AllPlayerForMatchRequestsMetaArgs, {context}: {context: Context}) =>
        context.service('playerForMatchRequests').meta(params, true),
  },
  Mutation: {
    createPlayerForMatchRequest:
      (_, params: MutationCreatePlayerForMatchRequestArgs, {context}: {context: Context}) =>
        context.service('playerForMatchRequests').create(params, true),
    updatePlayerForMatchRequest:
      (_, params: MutationUpdatePlayerForMatchRequestArgs, {context}: {context: Context}) =>
        context.service('playerForMatchRequests').update(params, true),
    removePlayerForMatchRequest:
      (_, params: MutationRemovePlayerForMatchRequestArgs, {context}: {context: Context}) =>
        context.service('playerForMatchRequests').delete(params, true),
  },
};

export default queryResolvers;
