/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllAdminLoginsArgs,
  Query_AllAdminLoginsMetaArgs,
  Resolvers,
  MutationCreateAdminLoginArgs,
  MutationUpdateAdminLoginArgs,
  MutationRemoveAdminLoginArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AdminLogin: (_, {id}, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.adminLogins.get(id),
    allAdminLogins: (_, params: QueryAllAdminLoginsArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.adminLogins.all(params),
    _allAdminLoginsMeta: (_, params: Query_AllAdminLoginsMetaArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.adminLogins.meta(params),
  },
  Mutation: {
    createAdminLogin: (_, params: MutationCreateAdminLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.adminLogins.create(params),
    updateAdminLogin: (_, params: MutationUpdateAdminLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.adminLogins.update(params),
    removeAdminLogin: (_, params: MutationRemoveAdminLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.adminLogins.delete(params),
  },
};

export default queryResolvers;
