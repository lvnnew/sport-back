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
      context.service('admRefreshTokens').get(id, true),
    allAdmRefreshTokens:
      (_, params: QueryAllAdmRefreshTokensArgs, {context}: {context: Context}) =>
        context.service('admRefreshTokens').all(params, true),
    _allAdmRefreshTokensMeta:
      (_, params: Query_AllAdmRefreshTokensMetaArgs, {context}: {context: Context}) =>
        context.service('admRefreshTokens').meta(params, true),
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
        context.service('admRefreshTokens').delete(params, true),
  },
};

export default queryResolvers;
