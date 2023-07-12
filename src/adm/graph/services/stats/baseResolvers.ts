import {
  QueryAllStatsArgs,
  Query_AllStatsMetaArgs,
  Resolvers,
  MutationCreateStatArgs,
  MutationUpdateStatArgs,
  MutationRemoveStatArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Stat: (_, {id}, {context}: {context: Context}) =>
      context.service('stats').get(id),
    allStats:
      (_, params: QueryAllStatsArgs, {context}: {context: Context}) =>
        context.service('stats').all(params),
    _allStatsMeta:
      (_, params: Query_AllStatsMetaArgs, {context}: {context: Context}) =>
        context.service('stats').meta(params),
  },
  Mutation: {
    createStat:
      (_, params: MutationCreateStatArgs, {context}: {context: Context}) =>
        context.service('stats').create(params, true),
    updateStat:
      (_, params: MutationUpdateStatArgs, {context}: {context: Context}) =>
        context.service('stats').update(params, true),
    removeStat:
      (_, params: MutationRemoveStatArgs, {context}: {context: Context}) =>
        context.service('stats').delete(params),
  },
};

export default queryResolvers;
