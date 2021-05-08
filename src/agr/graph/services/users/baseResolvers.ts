/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllUsersArgs,
  Query_AllUsersMetaArgs,
  Resolvers,
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationRemoveUserArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    User: (_, {id}, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.users.get(id),
    allUsers: (_, params: QueryAllUsersArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.users.all(params),
    _allUsersMeta: (_, params: Query_AllUsersMetaArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.users.meta(params),
  },
  Mutation: {
    createUser: (_, params: MutationCreateUserArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.users.create(params),
    updateUser: (_, params: MutationUpdateUserArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.users.update(params),
    removeUser: (_, params: MutationRemoveUserArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.users.delete(params),
  },
};

export default queryResolvers;
