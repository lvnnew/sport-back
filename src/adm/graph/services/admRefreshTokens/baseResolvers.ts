import {
  QueryAllAdmRefreshTokensArgs,
  Query_AllAdmRefreshTokensMetaArgs,
  Resolvers,
  MutationCreateAdmRefreshTokenArgs,
  MutationUpdateAdmRefreshTokenArgs,
  MutationRemoveAdmRefreshTokenArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AdmRefreshToken: (_, {id}, {context}: {context: Context}) =>
      context.service('admRefreshTokens').get(id),
    allAdmRefreshTokens:
      (_, params: QueryAllAdmRefreshTokensArgs, {context}: {context: Context}) =>
        context.service('admRefreshTokens').all(params),
    _allAdmRefreshTokensMeta:
      (_, params: Query_AllAdmRefreshTokensMetaArgs, {context}: {context: Context}) =>
        context.service('admRefreshTokens').meta(params),
  },
  Mutation: {
    createAdmRefreshToken:
      (_, params: MutationCreateAdmRefreshTokenArgs, {context}: {context: Context}) =>
        context.service('admRefreshTokens').create(params, true),
    updateAdmRefreshToken:
      (_, params: MutationUpdateAdmRefreshTokenArgs, {context}: {context: Context}) =>
        context.service('admRefreshTokens').update(params, true),
    removeAdmRefreshToken:
      (_, params: MutationRemoveAdmRefreshTokenArgs, {context}: {context: Context}) =>
        context.service('admRefreshTokens').delete(params),
  },
};

export default queryResolvers;
