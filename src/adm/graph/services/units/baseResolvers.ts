import {
  QueryAllUnitsArgs,
  Query_AllUnitsMetaArgs,
  Resolvers,
  MutationCreateUnitArgs,
  MutationUpdateUnitArgs,
  MutationRemoveUnitArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Unit: (_, {id}, {context}: {context: Context}) =>
      context.units.get(id),
    allUnits: (_, params: QueryAllUnitsArgs, {context}: {context: Context}) =>
      context.units.all(params),
    _allUnitsMeta: (_, params: Query_AllUnitsMetaArgs, {context}: {context: Context}) =>
      context.units.meta(params),
  },
  Mutation: {
    createUnit: (_, params: MutationCreateUnitArgs, {context}: {context: Context}) =>
      context.units.create(params),
    updateUnit: (_, params: MutationUpdateUnitArgs, {context}: {context: Context}) =>
      context.units.update(params),
    removeUnit: (_, params: MutationRemoveUnitArgs, {context}: {context: Context}) =>
      context.units.delete(params),
  },
};

export default queryResolvers;
