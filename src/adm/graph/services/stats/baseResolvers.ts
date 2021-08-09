import {
  QueryAllStatsArgs,
  Query_AllStatsMetaArgs,
  Resolvers,
  MutationCreateStatArgs,
  MutationUpdateStatArgs,
  MutationRemoveStatArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Stat: (_, {id}, {context}: {context: Context}) =>
      context.stats.get(id),
    allStats: (_, params: QueryAllStatsArgs, {context}: {context: Context}) =>
      context.stats.all(params),
    _allStatsMeta: (_, params: Query_AllStatsMetaArgs, {context}: {context: Context}) =>
      context.stats.meta(params),
  },
  Mutation: {
    createStat: (_, params: MutationCreateStatArgs, {context}: {context: Context}) =>
      context.stats.create(params),
    updateStat: (_, params: MutationUpdateStatArgs, {context}: {context: Context}) =>
      context.stats.update(params),
    removeStat: (_, params: MutationRemoveStatArgs, {context}: {context: Context}) =>
      context.stats.delete(params),
  },
};

export default queryResolvers;
