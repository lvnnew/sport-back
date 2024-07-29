import {
  QueryAllWscUsersArgs,
  Query_AllWscUsersMetaArgs,
  Resolvers,
  MutationCreateWscUserArgs,
  MutationUpdateWscUserArgs,
  MutationRemoveWscUserArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    WscUser: (_, {id}, {context}: {context: Context}) =>
      context.service('wscUsers').get(id, true),
    allWscUsers:
      (_, params: QueryAllWscUsersArgs, {context}: {context: Context}) =>
        context.service('wscUsers').all(params, true),
    _allWscUsersMeta:
      (_, params: Query_AllWscUsersMetaArgs, {context}: {context: Context}) =>
        context.service('wscUsers').meta(params, true),
  },
  Mutation: {
    createWscUser:
      (_, params: MutationCreateWscUserArgs, {context}: {context: Context}) =>
        context.service('wscUsers').create(params, true),
    updateWscUser:
      (_, params: MutationUpdateWscUserArgs, {context}: {context: Context}) =>
        context.service('wscUsers').update(params, true),
    removeWscUser:
      (_, params: MutationRemoveWscUserArgs, {context}: {context: Context}) =>
        context.service('wscUsers').delete(params, true),
  },
};

export default queryResolvers;
