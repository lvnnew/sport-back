import {
  QueryAllPlayersArgs,
  Query_AllPlayersMetaArgs,
  Resolvers,
  MutationCreatePlayerArgs,
  MutationUpdatePlayerArgs,
  MutationRemovePlayerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Player: (_, {id}, {context}: {context: Context}) =>
      context.service('players').get(id, true),
    allPlayers:
      (_, params: QueryAllPlayersArgs, {context}: {context: Context}) =>
        context.service('players').all(params, true),
    _allPlayersMeta:
      (_, params: Query_AllPlayersMetaArgs, {context}: {context: Context}) =>
        context.service('players').meta(params, true),
  },
  Mutation: {
    createPlayer:
      (_, params: MutationCreatePlayerArgs, {context}: {context: Context}) =>
        context.service('players').create(params, true),
    updatePlayer:
      (_, params: MutationUpdatePlayerArgs, {context}: {context: Context}) =>
        context.service('players').update(params, true),
    removePlayer:
      (_, params: MutationRemovePlayerArgs, {context}: {context: Context}) =>
        context.service('players').delete(params, true),
  },
};

export default queryResolvers;
