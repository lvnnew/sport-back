import {
  QueryAllAppLoginsArgs,
  Query_AllAppLoginsMetaArgs,
  Resolvers,
  MutationCreateAppLoginArgs,
  MutationUpdateAppLoginArgs,
  MutationRemoveAppLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AppLogin: (_, {id}, {context}: {context: Context}) =>
      context.appLogins.get(id),
    allAppLogins: (_, params: QueryAllAppLoginsArgs, {context}: {context: Context}) =>
      context.appLogins.all(params),
    _allAppLoginsMeta: (_, params: Query_AllAppLoginsMetaArgs, {context}: {context: Context}) =>
      context.appLogins.meta(params),
  },
  Mutation: {
    createAppLogin: (_, params: MutationCreateAppLoginArgs, {context}: {context: Context}) =>
      context.appLogins.create(params, true),
    updateAppLogin: (_, params: MutationUpdateAppLoginArgs, {context}: {context: Context}) =>
      context.appLogins.update(params, true),
    removeAppLogin: (_, params: MutationRemoveAppLoginArgs, {context}: {context: Context}) =>
      context.appLogins.delete(params),
  },
};

export default queryResolvers;
