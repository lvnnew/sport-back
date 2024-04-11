import {
  QueryAllUsersArgs,
  Query_AllUsersMetaArgs,
  Resolvers,
  MutationCreateUserArgs,
  MutationUpdateUserArgs,
  MutationRemoveUserArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    User: (_, {id}, {context}: {context: Context}) =>
      context.service('users').get(id, true),
    allUsers:
      (_, params: QueryAllUsersArgs, {context}: {context: Context}) =>
        context.service('users').all(params, true),
    _allUsersMeta:
      (_, params: Query_AllUsersMetaArgs, {context}: {context: Context}) =>
        context.service('users').meta(params, true),
  },
  Mutation: {
    createUser:
      (_, params: MutationCreateUserArgs, {context}: {context: Context}) =>
        context.service('users').create(params, true),
    updateUser:
      (_, params: MutationUpdateUserArgs, {context}: {context: Context}) =>
        context.service('users').update(params, true),
    removeUser:
      (_, params: MutationRemoveUserArgs, {context}: {context: Context}) =>
        context.service('users').delete(params, true),
  },
};

export default queryResolvers;
