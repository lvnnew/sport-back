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
import {AgrContext} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
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
  },
};

export default queryResolvers;
