import {
  QueryAllClubsArgs,
  Query_AllClubsMetaArgs,
  Resolvers,
  MutationCreateClubArgs,
  MutationUpdateClubArgs,
  MutationRemoveClubArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Club: (_, {id}, {context}: {context: Context}) =>
      context.service('clubs').get(id, true),
    allClubs:
      (_, params: QueryAllClubsArgs, {context}: {context: Context}) =>
        context.service('clubs').all(params, true),
    _allClubsMeta:
      (_, params: Query_AllClubsMetaArgs, {context}: {context: Context}) =>
        context.service('clubs').meta(params, true),
  },
  Mutation: {
    createClub:
      (_, params: MutationCreateClubArgs, {context}: {context: Context}) =>
        context.service('clubs').create(params, true),
    updateClub:
      (_, params: MutationUpdateClubArgs, {context}: {context: Context}) =>
        context.service('clubs').update(params, true),
    removeClub:
      (_, params: MutationRemoveClubArgs, {context}: {context: Context}) =>
        context.service('clubs').delete(params, true),
  },
};

export default queryResolvers;
