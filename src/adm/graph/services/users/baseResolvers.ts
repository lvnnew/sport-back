import {
  QueryAllUsersArgs,
  Query_AllUsersMetaArgs,
  Resolvers,
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationRemoveUserArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    User: (_, {id}, {context}: {context: Context}) =>
      context.users.get(id),
    allUsers: (_, params: QueryAllUsersArgs, {context}: {context: Context}) =>
      context.users.all(params),
    _allUsersMeta: (_, params: Query_AllUsersMetaArgs, {context}: {context: Context}) =>
      context.users.meta(params),
  },
  Mutation: {
    createUser: (_, params: MutationCreateUserArgs, {context}: {context: Context}) =>
      context.users.create(params),
    updateUser: (_, params: MutationUpdateUserArgs, {context}: {context: Context}) =>
      context.users.update(params),
    removeUser: (_, params: MutationRemoveUserArgs, {context}: {context: Context}) =>
      context.users.delete(params),
  },
};

export default queryResolvers;
