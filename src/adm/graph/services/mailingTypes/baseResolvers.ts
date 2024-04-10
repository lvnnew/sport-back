import {
  QueryAllMailingTypesArgs,
  Query_AllMailingTypesMetaArgs,
  Resolvers,
  MutationCreateMailingTypeArgs,
  MutationUpdateMailingTypeArgs,
  MutationRemoveMailingTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    MailingType: (_, {id}, {context}: {context: Context}) =>
      context.service('mailingTypes').get(id, true),
    allMailingTypes:
      (_, params: QueryAllMailingTypesArgs, {context}: {context: Context}) =>
        context.service('mailingTypes').all(params, true),
    _allMailingTypesMeta:
      (_, params: Query_AllMailingTypesMetaArgs, {context}: {context: Context}) =>
        context.service('mailingTypes').meta(params, true),
  },
  Mutation: {
    createMailingType:
      (_, params: MutationCreateMailingTypeArgs, {context}: {context: Context}) =>
        context.service('mailingTypes').create(params, true),
    updateMailingType:
      (_, params: MutationUpdateMailingTypeArgs, {context}: {context: Context}) =>
        context.service('mailingTypes').update(params, true),
    removeMailingType:
      (_, params: MutationRemoveMailingTypeArgs, {context}: {context: Context}) =>
        context.service('mailingTypes').delete(params, true),
  },
};

export default queryResolvers;
