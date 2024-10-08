import {
  QueryAllMessageTypesArgs,
  Query_AllMessageTypesMetaArgs,
  Resolvers,
  MutationCreateMessageTypeArgs,
  MutationUpdateMessageTypeArgs,
  MutationRemoveMessageTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MessageType: (_, {id}, {context}: {context: Context}) =>
      context.service('messageTypes').get(id, true),
    allMessageTypes:
      (_, params: QueryAllMessageTypesArgs, {context}: {context: Context}) =>
        context.service('messageTypes').all(params, true),
    _allMessageTypesMeta:
      (_, params: Query_AllMessageTypesMetaArgs, {context}: {context: Context}) =>
        context.service('messageTypes').meta(params, true),
  },
  Mutation: {
    createMessageType:
      (_, params: MutationCreateMessageTypeArgs, {context}: {context: Context}) =>
        context.service('messageTypes').create(params, true),
    updateMessageType:
      (_, params: MutationUpdateMessageTypeArgs, {context}: {context: Context}) =>
        context.service('messageTypes').update(params, true),
    removeMessageType:
      (_, params: MutationRemoveMessageTypeArgs, {context}: {context: Context}) =>
        context.service('messageTypes').delete(params, true),
  },
};

export default queryResolvers;
