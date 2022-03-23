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
      context.service('tenants').get(id),
    allTenants: (_, params: QueryAllTenantsArgs, {context}: {context: Context}) =>
      context.service('tenants').all(params),
    _allTenantsMeta: (_, params: Query_AllTenantsMetaArgs, {context}: {context: Context}) =>
      context.service('tenants').meta(params),
  },
  Mutation: {
    createTenant: (_, params: MutationCreateTenantArgs, {context}: {context: Context}) =>
      context.service('tenants').create(params, true),
    updateTenant: (_, params: MutationUpdateTenantArgs, {context}: {context: Context}) =>
      context.service('tenants').update(params, true),
    removeTenant: (_, params: MutationRemoveTenantArgs, {context}: {context: Context}) =>
      context.service('tenants').delete(params),
  },
};

export default queryResolvers;
