/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllManagersArgs,
  Query_AllManagersMetaArgs,
  Resolvers,
  MutationCreateManagerArgs,
  MutationUpdateManagerArgs,
  MutationRemoveManagerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Manager: (_, {id}, {context}: {context: Context}) =>
      context.managers.get(id),
    allManagers: (_, params: QueryAllManagersArgs, {context}: {context: Context}) =>
      context.managers.all(params),
    _allManagersMeta: (_, params: Query_AllManagersMetaArgs, {context}: {context: Context}) =>
      context.managers.meta(params),
  },
  Mutation: {
    createManager: (_, params: MutationCreateManagerArgs, {context}: {context: Context}) =>
      context.managers.create(params),
    updateManager: (_, params: MutationUpdateManagerArgs, {context}: {context: Context}) =>
      context.managers.update(params),
    removeManager: (_, params: MutationRemoveManagerArgs, {context}: {context: Context}) =>
      context.managers.delete(params),
  },
};

export default queryResolvers;
