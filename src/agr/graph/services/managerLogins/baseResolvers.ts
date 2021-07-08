/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllManagerLoginsArgs,
  Query_AllManagerLoginsMetaArgs,
  Resolvers,
  MutationCreateManagerLoginArgs,
  MutationUpdateManagerLoginArgs,
  MutationRemoveManagerLoginArgs,
} from '../../../../generated/graphql';
<<<<<<< HEAD
import {AgrContext} from '../../../services/context';
=======
import {Context} from '../../../services/context';
>>>>>>> 6375169 (gen)

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
<<<<<<< HEAD
    ManagerLogin: (_, {id}, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.managerLogins.get(id),
    allManagerLogins: (_, params: QueryAllManagerLoginsArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.managerLogins.all(params),
    _allManagerLoginsMeta: (_, params: Query_AllManagerLoginsMetaArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.managerLogins.meta(params),
  },
  Mutation: {
    createManagerLogin: (_, params: MutationCreateManagerLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.managerLogins.create(params),
    updateManagerLogin: (_, params: MutationUpdateManagerLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.managerLogins.update(params),
    removeManagerLogin: (_, params: MutationRemoveManagerLoginArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.managerLogins.delete(params),
=======
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
>>>>>>> 6375169 (gen)
  },
};

export default queryResolvers;
