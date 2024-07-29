import {
  QueryAllPeriodTypesArgs,
  Query_AllPeriodTypesMetaArgs,
  Resolvers,
  MutationCreatePeriodTypeArgs,
  MutationUpdatePeriodTypeArgs,
  MutationRemovePeriodTypeArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PeriodType: (_, {id}, {context}: {context: Context}) =>
      context.service('periodTypes').get(id, true),
    allPeriodTypes:
      (_, params: QueryAllPeriodTypesArgs, {context}: {context: Context}) =>
        context.service('periodTypes').all(params, true),
    _allPeriodTypesMeta:
      (_, params: Query_AllPeriodTypesMetaArgs, {context}: {context: Context}) =>
        context.service('periodTypes').meta(params, true),
  },
  Mutation: {
    createPeriodType:
      (_, params: MutationCreatePeriodTypeArgs, {context}: {context: Context}) =>
        context.service('periodTypes').create(params, true),
    updatePeriodType:
      (_, params: MutationUpdatePeriodTypeArgs, {context}: {context: Context}) =>
        context.service('periodTypes').update(params, true),
    removePeriodType:
      (_, params: MutationRemovePeriodTypeArgs, {context}: {context: Context}) =>
        context.service('periodTypes').delete(params, true),
  },
};

export default queryResolvers;
