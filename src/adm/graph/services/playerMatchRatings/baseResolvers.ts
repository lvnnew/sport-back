import {
  QueryAllPlayerMatchRatingsArgs,
  Query_AllPlayerMatchRatingsMetaArgs,
  Resolvers,
  MutationCreatePlayerMatchRatingArgs,
  MutationUpdatePlayerMatchRatingArgs,
  MutationRemovePlayerMatchRatingArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PlayerMatchRating: (_, {id}, {context}: {context: Context}) =>
      context.service('playerMatchRatings').get(id, true),
    allPlayerMatchRatings:
      (_, params: QueryAllPlayerMatchRatingsArgs, {context}: {context: Context}) =>
        context.service('playerMatchRatings').all(params, true),
    _allPlayerMatchRatingsMeta:
      (_, params: Query_AllPlayerMatchRatingsMetaArgs, {context}: {context: Context}) =>
        context.service('playerMatchRatings').meta(params, true),
  },
  Mutation: {
    createPlayerMatchRating:
      (_, params: MutationCreatePlayerMatchRatingArgs, {context}: {context: Context}) =>
        context.service('playerMatchRatings').create(params, true),
    updatePlayerMatchRating:
      (_, params: MutationUpdatePlayerMatchRatingArgs, {context}: {context: Context}) =>
        context.service('playerMatchRatings').update(params, true),
    removePlayerMatchRating:
      (_, params: MutationRemovePlayerMatchRatingArgs, {context}: {context: Context}) =>
        context.service('playerMatchRatings').delete(params, true),
  },
};

export default queryResolvers;
