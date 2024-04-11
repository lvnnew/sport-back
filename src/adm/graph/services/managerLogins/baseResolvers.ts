import {
  QueryAllManagerLoginsArgs,
  Query_AllManagerLoginsMetaArgs,
  Resolvers,
  MutationCreateManagerLoginArgs,
  MutationUpdateManagerLoginArgs,
  MutationRemoveManagerLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ManagerLogin: (_, {id}, {context}: {context: Context}) =>
      context.service('managerLogins').get(id, true),
    allManagerLogins:
      (_, params: QueryAllManagerLoginsArgs, {context}: {context: Context}) =>
        context.service('managerLogins').all(params, true),
    _allManagerLoginsMeta:
      (_, params: Query_AllManagerLoginsMetaArgs, {context}: {context: Context}) =>
        context.service('managerLogins').meta(params, true),
  },
  Mutation: {
    createManagerLogin:
      (_, params: MutationCreateManagerLoginArgs, {context}: {context: Context}) =>
        context.service('managerLogins').create(params, true),
    updateManagerLogin:
      (_, params: MutationUpdateManagerLoginArgs, {context}: {context: Context}) =>
        context.service('managerLogins').update(params, true),
    removeManagerLogin:
      (_, params: MutationRemoveManagerLoginArgs, {context}: {context: Context}) =>
        context.service('managerLogins').delete(params, true),
  },
};

export default queryResolvers;
