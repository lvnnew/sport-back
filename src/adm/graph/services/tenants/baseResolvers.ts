import {
  QueryAllTenantsArgs,
  Query_AllTenantsMetaArgs,
  Resolvers,
  MutationCreateTenantArgs,
  MutationUpdateTenantArgs,
  MutationRemoveTenantArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Tenant: (_, {id}, {context}: {context: Context}) =>
      context.service('tenants').get(id, true),
    allTenants:
      (_, params: QueryAllTenantsArgs, {context}: {context: Context}) =>
        context.service('tenants').all(params, true),
    _allTenantsMeta:
      (_, params: Query_AllTenantsMetaArgs, {context}: {context: Context}) =>
        context.service('tenants').meta(params, true),
  },
  Mutation: {
    createTenant:
      (_, params: MutationCreateTenantArgs, {context}: {context: Context}) =>
        context.service('tenants').create(params, true),
    updateTenant:
      (_, params: MutationUpdateTenantArgs, {context}: {context: Context}) =>
        context.service('tenants').update(params, true),
    removeTenant:
      (_, params: MutationRemoveTenantArgs, {context}: {context: Context}) =>
        context.service('tenants').delete(params, true),
  },
};

export default queryResolvers;
