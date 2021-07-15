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
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Admin: (_, {id}, {context}: {context: Context}) =>
      context.admins.get(id),
    allAdmins: (_, params: QueryAllAdminsArgs, {context}: {context: Context}) =>
      context.admins.all(params),
    _allAdminsMeta: (_, params: Query_AllAdminsMetaArgs, {context}: {context: Context}) =>
      context.admins.meta(params),
  },
  Mutation: {
    createAdmin: (_, params: MutationCreateAdminArgs, {context}: {context: Context}) =>
      context.admins.create(params),
    updateAdmin: (_, params: MutationUpdateAdminArgs, {context}: {context: Context}) =>
      context.admins.update(params),
    removeAdmin: (_, params: MutationRemoveAdminArgs, {context}: {context: Context}) =>
      context.admins.delete(params),
  },
};

export default queryResolvers;
