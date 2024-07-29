import {
  QueryAllWscMessagesArgs,
  Query_AllWscMessagesMetaArgs,
  Resolvers,
  MutationCreateWscMessageArgs,
  MutationUpdateWscMessageArgs,
  MutationRemoveWscMessageArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    WscMessage: (_, {id}, {context}: {context: Context}) =>
      context.service('wscMessages').get(id, true),
    allWscMessages:
      (_, params: QueryAllWscMessagesArgs, {context}: {context: Context}) =>
        context.service('wscMessages').all(params, true),
    _allWscMessagesMeta:
      (_, params: Query_AllWscMessagesMetaArgs, {context}: {context: Context}) =>
        context.service('wscMessages').meta(params, true),
  },
  Mutation: {
    createWscMessage:
      (_, params: MutationCreateWscMessageArgs, {context}: {context: Context}) =>
        context.service('wscMessages').create(params, true),
    updateWscMessage:
      (_, params: MutationUpdateWscMessageArgs, {context}: {context: Context}) =>
        context.service('wscMessages').update(params, true),
    removeWscMessage:
      (_, params: MutationRemoveWscMessageArgs, {context}: {context: Context}) =>
        context.service('wscMessages').delete(params, true),
  },
};

export default queryResolvers;
