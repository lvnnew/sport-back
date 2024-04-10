import {
  QueryAllManagerLoginTypesArgs,
  Query_AllManagerLoginTypesMetaArgs,
  Resolvers,
  MutationCreateManagerLoginTypeArgs,
  MutationUpdateManagerLoginTypeArgs,
  MutationRemoveManagerLoginTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ManagerLoginType: (_, {id}, {context}: {context: Context}) =>
      context.service('managerLoginTypes').get(id, true),
    allManagerLoginTypes:
      (_, params: QueryAllManagerLoginTypesArgs, {context}: {context: Context}) =>
        context.service('managerLoginTypes').all(params, true),
    _allManagerLoginTypesMeta:
      (_, params: Query_AllManagerLoginTypesMetaArgs, {context}: {context: Context}) =>
        context.service('managerLoginTypes').meta(params, true),
  },
  Mutation: {
    createManagerLoginType:
      (_, params: MutationCreateManagerLoginTypeArgs, {context}: {context: Context}) =>
        context.service('managerLoginTypes').create(params, true),
    updateManagerLoginType:
      (_, params: MutationUpdateManagerLoginTypeArgs, {context}: {context: Context}) =>
        context.service('managerLoginTypes').update(params, true),
    removeManagerLoginType:
      (_, params: MutationRemoveManagerLoginTypeArgs, {context}: {context: Context}) =>
        context.service('managerLoginTypes').delete(params, true),
  },
};

export default queryResolvers;
