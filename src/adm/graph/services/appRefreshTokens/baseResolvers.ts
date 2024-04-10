import {
  QueryAllAppRefreshTokensArgs,
  Query_AllAppRefreshTokensMetaArgs,
  Resolvers,
  MutationCreateAppRefreshTokenArgs,
  MutationUpdateAppRefreshTokenArgs,
  MutationRemoveAppRefreshTokenArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AppRefreshToken: (_, {id}, {context}: {context: Context}) =>
      context.service('appRefreshTokens').get(id, true),
    allAppRefreshTokens:
      (_, params: QueryAllAppRefreshTokensArgs, {context}: {context: Context}) =>
        context.service('appRefreshTokens').all(params, true),
    _allAppRefreshTokensMeta:
      (_, params: Query_AllAppRefreshTokensMetaArgs, {context}: {context: Context}) =>
        context.service('appRefreshTokens').meta(params, true),
  },
  Mutation: {
    createAppRefreshToken:
      (_, params: MutationCreateAppRefreshTokenArgs, {context}: {context: Context}) =>
        context.service('appRefreshTokens').create(params, true),
    updateAppRefreshToken:
      (_, params: MutationUpdateAppRefreshTokenArgs, {context}: {context: Context}) =>
        context.service('appRefreshTokens').update(params, true),
    removeAppRefreshToken:
      (_, params: MutationRemoveAppRefreshTokenArgs, {context}: {context: Context}) =>
        context.service('appRefreshTokens').delete(params, true),
  },
};

export default queryResolvers;
