import {
  QueryAllDelegationsArgs,
  Query_AllDelegationsMetaArgs,
  Resolvers,
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Delegation: (_, {id}, {context}: {context: Context}) =>
      context.service('delegations').get(id, true),
    allDelegations:
      (_, params: QueryAllDelegationsArgs, {context}: {context: Context}) =>
        context.service('delegations').all(params, true),
    _allDelegationsMeta:
      (_, params: Query_AllDelegationsMetaArgs, {context}: {context: Context}) =>
        context.service('delegations').meta(params, true),
  },
  Mutation: {
    createDelegation:
      (_, params: MutationCreateDelegationArgs, {context}: {context: Context}) =>
        context.service('delegations').create(params, true),
    updateDelegation:
      (_, params: MutationUpdateDelegationArgs, {context}: {context: Context}) =>
        context.service('delegations').update(params, true),
    removeDelegation:
      (_, params: MutationRemoveDelegationArgs, {context}: {context: Context}) =>
        context.service('delegations').delete(params, true),
  },
};

export default queryResolvers;
