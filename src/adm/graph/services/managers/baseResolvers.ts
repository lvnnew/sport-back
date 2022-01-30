import {
  QueryAllManagersArgs,
  Query_AllManagersMetaArgs,
  Resolvers,
  MutationCreateManagerArgs,
  MutationUpdateManagerArgs,
  MutationRemoveManagerArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Manager: (_, {id}, {context}: {context: Context}) =>
      context.service('managers').get(id),
    allManagers: (_, params: QueryAllManagersArgs, {context}: {context: Context}) =>
      context.service('managers').all(params),
    _allManagersMeta: (_, params: Query_AllManagersMetaArgs, {context}: {context: Context}) =>
      context.service('managers').meta(params),
  },
  Mutation: {
    createManager: (_, params: MutationCreateManagerArgs, {context}: {context: Context}) =>
      context.service('managers').create(params, true),
    updateManager: (_, params: MutationUpdateManagerArgs, {context}: {context: Context}) =>
      context.service('managers').update(params, true),
    removeManager: (_, params: MutationRemoveManagerArgs, {context}: {context: Context}) =>
      context.service('managers').delete(params),
  },
};

export default queryResolvers;
