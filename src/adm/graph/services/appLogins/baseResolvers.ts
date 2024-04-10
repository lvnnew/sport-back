import {
  QueryAllAppLoginsArgs,
  Query_AllAppLoginsMetaArgs,
  Resolvers,
  MutationCreateAppLoginArgs,
  MutationUpdateAppLoginArgs,
  MutationRemoveAppLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AppLogin: (_, {id}, {context}: {context: Context}) =>
      context.service('appLogins').get(id, true),
    allAppLogins:
      (_, params: QueryAllAppLoginsArgs, {context}: {context: Context}) =>
        context.service('appLogins').all(params, true),
    _allAppLoginsMeta:
      (_, params: Query_AllAppLoginsMetaArgs, {context}: {context: Context}) =>
        context.service('appLogins').meta(params, true),
  },
  Mutation: {
    createAppLogin:
      (_, params: MutationCreateAppLoginArgs, {context}: {context: Context}) =>
        context.service('appLogins').create(params, true),
    updateAppLogin:
      (_, params: MutationUpdateAppLoginArgs, {context}: {context: Context}) =>
        context.service('appLogins').update(params, true),
    removeAppLogin:
      (_, params: MutationRemoveAppLoginArgs, {context}: {context: Context}) =>
        context.service('appLogins').delete(params, true),
  },
};

export default queryResolvers;
