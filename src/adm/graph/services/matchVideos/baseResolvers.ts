import {
  QueryAllMatchVideosArgs,
  Query_AllMatchVideosMetaArgs,
  Resolvers,
  MutationCreateMatchVideoArgs,
  MutationUpdateMatchVideoArgs,
  MutationRemoveMatchVideoArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MatchVideo: (_, {id}, {context}: {context: Context}) =>
      context.service('matchVideos').get(id, true),
    allMatchVideos:
      (_, params: QueryAllMatchVideosArgs, {context}: {context: Context}) =>
        context.service('matchVideos').all(params, true),
    _allMatchVideosMeta:
      (_, params: Query_AllMatchVideosMetaArgs, {context}: {context: Context}) =>
        context.service('matchVideos').meta(params, true),
  },
  Mutation: {
    createMatchVideo:
      (_, params: MutationCreateMatchVideoArgs, {context}: {context: Context}) =>
        context.service('matchVideos').create(params, true),
    updateMatchVideo:
      (_, params: MutationUpdateMatchVideoArgs, {context}: {context: Context}) =>
        context.service('matchVideos').update(params, true),
    removeMatchVideo:
      (_, params: MutationRemoveMatchVideoArgs, {context}: {context: Context}) =>
        context.service('matchVideos').delete(params, true),
  },
};

export default queryResolvers;
