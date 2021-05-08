/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllAppLoginsArgs,
  Query_AllAppLoginsMetaArgs,
  Resolvers,
  MutationCreateAppLoginArgs,
  MutationUpdateAppLoginArgs,
  MutationRemoveAppLoginArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AppLogin: (_, {id}, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.appLogins.get(id),
    allAppLogins: (_, params: QueryAllAppLoginsArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.appLogins.all(params),
    _allAppLoginsMeta: (_, params: Query_AllAppLoginsMetaArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.appLogins.meta(params),
  },
  Mutation: {
    createAppLogin: (_, params: MutationCreateAppLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.appLogins.create(params),
    updateAppLogin: (_, params: MutationUpdateAppLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.appLogins.update(params),
    removeAppLogin: (_, params: MutationRemoveAppLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.appLogins.delete(params),
  },
};

export default queryResolvers;
