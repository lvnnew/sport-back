import {
  QueryAllWscContactsArgs,
  Query_AllWscContactsMetaArgs,
  Resolvers,
  MutationCreateWscContactArgs,
  MutationUpdateWscContactArgs,
  MutationRemoveWscContactArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    WscContact: (_, {id}, {context}: {context: Context}) =>
      context.service('wscContacts').get(id, true),
    allWscContacts:
      (_, params: QueryAllWscContactsArgs, {context}: {context: Context}) =>
        context.service('wscContacts').all(params, true),
    _allWscContactsMeta:
      (_, params: Query_AllWscContactsMetaArgs, {context}: {context: Context}) =>
        context.service('wscContacts').meta(params, true),
  },
  Mutation: {
    createWscContact:
      (_, params: MutationCreateWscContactArgs, {context}: {context: Context}) =>
        context.service('wscContacts').create(params, true),
    updateWscContact:
      (_, params: MutationUpdateWscContactArgs, {context}: {context: Context}) =>
        context.service('wscContacts').update(params, true),
    removeWscContact:
      (_, params: MutationRemoveWscContactArgs, {context}: {context: Context}) =>
        context.service('wscContacts').delete(params, true),
  },
};

export default queryResolvers;
