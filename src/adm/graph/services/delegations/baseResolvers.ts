import {
  QueryAllDelegationsArgs,
  Query_AllDelegationsMetaArgs,
  Resolvers,
  MutationCreateDelegationArgs,
  MutationUpdateDelegationArgs,
  MutationRemoveDelegationArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Delegation: (_, {id}, {context}: {context: Context}) =>
      context.delegations.get(id),
    allDelegations: (_, params: QueryAllDelegationsArgs, {context}: {context: Context}) =>
      context.delegations.all(params),
    _allDelegationsMeta: (_, params: Query_AllDelegationsMetaArgs, {context}: {context: Context}) =>
      context.delegations.meta(params),
  },
  Mutation: {
    createDelegation: (_, params: MutationCreateDelegationArgs, {context}: {context: Context}) =>
      context.delegations.create(params),
    updateDelegation: (_, params: MutationUpdateDelegationArgs, {context}: {context: Context}) =>
      context.delegations.update(params),
    removeDelegation: (_, params: MutationRemoveDelegationArgs, {context}: {context: Context}) =>
      context.delegations.delete(params),
  },
};

export default queryResolvers;
