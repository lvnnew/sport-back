import {
  QueryAllManagerLoginsArgs,
  Query_AllManagerLoginsMetaArgs,
  Resolvers,
  MutationCreateManagerLoginArgs,
  MutationUpdateManagerLoginArgs,
  MutationRemoveManagerLoginArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ManagerLogin: (_, {id}, {context}: {context: Context}) =>
      context.managerLogins.get(id),
    allManagerLogins: (_, params: QueryAllManagerLoginsArgs, {context}: {context: Context}) =>
      context.managerLogins.all(params),
    _allManagerLoginsMeta: (_, params: Query_AllManagerLoginsMetaArgs, {context}: {context: Context}) =>
      context.managerLogins.meta(params),
  },
  Mutation: {
    createManagerLogin: (_, params: MutationCreateManagerLoginArgs, {context}: {context: Context}) =>
      context.managerLogins.create(params),
    updateManagerLogin: (_, params: MutationUpdateManagerLoginArgs, {context}: {context: Context}) =>
      context.managerLogins.update(params),
    removeManagerLogin: (_, params: MutationRemoveManagerLoginArgs, {context}: {context: Context}) =>
      context.managerLogins.delete(params),
  },
};

export default queryResolvers;
