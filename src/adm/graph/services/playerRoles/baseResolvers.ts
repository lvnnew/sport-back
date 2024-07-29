import {
  QueryAllPlayerRolesArgs,
  Query_AllPlayerRolesMetaArgs,
  Resolvers,
  MutationCreatePlayerRoleArgs,
  MutationUpdatePlayerRoleArgs,
  MutationRemovePlayerRoleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    PlayerRole: (_, {id}, {context}: {context: Context}) =>
      context.service('playerRoles').get(id, true),
    allPlayerRoles:
      (_, params: QueryAllPlayerRolesArgs, {context}: {context: Context}) =>
        context.service('playerRoles').all(params, true),
    _allPlayerRolesMeta:
      (_, params: Query_AllPlayerRolesMetaArgs, {context}: {context: Context}) =>
        context.service('playerRoles').meta(params, true),
  },
  Mutation: {
    createPlayerRole:
      (_, params: MutationCreatePlayerRoleArgs, {context}: {context: Context}) =>
        context.service('playerRoles').create(params, true),
    updatePlayerRole:
      (_, params: MutationUpdatePlayerRoleArgs, {context}: {context: Context}) =>
        context.service('playerRoles').update(params, true),
    removePlayerRole:
      (_, params: MutationRemovePlayerRoleArgs, {context}: {context: Context}) =>
        context.service('playerRoles').delete(params, true),
  },
};

export default queryResolvers;
