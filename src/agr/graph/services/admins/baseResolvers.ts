/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllAdminsArgs,
  Query_AllAdminsMetaArgs,
  Resolvers,
  MutationCreateAdminArgs,
  MutationUpdateAdminArgs,
  MutationRemoveAdminArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Admin: (_, {id}, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.admins.get(id),
    allAdmins: (_, params: QueryAllAdminsArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.admins.all(params),
    _allAdminsMeta: (_, params: Query_AllAdminsMetaArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.admins.meta(params),
  },
  Mutation: {
    createAdmin: (_, params: MutationCreateAdminArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.admins.create(params),
    updateAdmin: (_, params: MutationUpdateAdminArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.admins.update(params),
    removeAdmin: (_, params: MutationRemoveAdminArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.admins.delete(params),
  },
};

export default queryResolvers;
