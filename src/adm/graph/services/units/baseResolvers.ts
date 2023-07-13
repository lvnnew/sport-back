import {
  QueryAllUnitsArgs,
  Query_AllUnitsMetaArgs,
  Resolvers,
  MutationCreateUnitArgs,
  MutationUpdateUnitArgs,
  MutationRemoveUnitArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Unit: (_, {id}, {context}: {context: Context}) =>
      context.service('units').get(id),
    allUnits:
      (_, params: QueryAllUnitsArgs, {context}: {context: Context}) =>
        context.service('units').all(params),
    _allUnitsMeta:
      (_, params: Query_AllUnitsMetaArgs, {context}: {context: Context}) =>
        context.service('units').meta(params),
  },
  Mutation: {
    createUnit:
      (_, params: MutationCreateUnitArgs, {context}: {context: Context}) =>
        context.service('units').create(params, true),
    updateUnit:
      (_, params: MutationUpdateUnitArgs, {context}: {context: Context}) =>
        context.service('units').update(params, true),
    removeUnit:
      (_, params: MutationRemoveUnitArgs, {context}: {context: Context}) =>
        context.service('units').delete(params),
  },
};

export default queryResolvers;
