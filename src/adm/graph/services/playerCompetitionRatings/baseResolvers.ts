import {
  QueryAllPlayerCompetitionRatingsArgs,
  Query_AllPlayerCompetitionRatingsMetaArgs,
  Resolvers,
  MutationCreatePlayerCompetitionRatingArgs,
  MutationUpdatePlayerCompetitionRatingArgs,
  MutationRemovePlayerCompetitionRatingArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PlayerCompetitionRating: (_, {id}, {context}: {context: Context}) =>
      context.service('playerCompetitionRatings').get(id, true),
    allPlayerCompetitionRatings:
      (_, params: QueryAllPlayerCompetitionRatingsArgs, {context}: {context: Context}) =>
        context.service('playerCompetitionRatings').all(params, true),
    _allPlayerCompetitionRatingsMeta:
      (_, params: Query_AllPlayerCompetitionRatingsMetaArgs, {context}: {context: Context}) =>
        context.service('playerCompetitionRatings').meta(params, true),
  },
  Mutation: {
    createPlayerCompetitionRating:
      (_, params: MutationCreatePlayerCompetitionRatingArgs, {context}: {context: Context}) =>
        context.service('playerCompetitionRatings').create(params, true),
    updatePlayerCompetitionRating:
      (_, params: MutationUpdatePlayerCompetitionRatingArgs, {context}: {context: Context}) =>
        context.service('playerCompetitionRatings').update(params, true),
    removePlayerCompetitionRating:
      (_, params: MutationRemovePlayerCompetitionRatingArgs, {context}: {context: Context}) =>
        context.service('playerCompetitionRatings').delete(params, true),
  },
};

export default queryResolvers;
