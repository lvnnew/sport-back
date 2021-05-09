/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/camelcase */
import {
  QueryAllStatsArgs,
  Query_AllStatsMetaArgs,
  Resolvers,
  MutationCreateStatArgs,
  MutationUpdateStatArgs,
  MutationRemoveStatArgs,
} from '../../../../generated/graphql';
import {AgrContext} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Stat: (_, {id}, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.stats.get(id),
    allStats: (_, params: QueryAllStatsArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.stats.all(params),
    _allStatsMeta: (_, params: Query_AllStatsMetaArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.stats.meta(params),
  },
  Mutation: {
    createStat: (_, params: MutationCreateStatArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.stats.create(params),
    updateStat: (_, params: MutationUpdateStatArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.stats.update(params),
    removeStat: (_, params: MutationRemoveStatArgs, {dataSources}: {dataSources: AgrContext}) =>
      dataSources.stats.delete(params),
  },
};

export default queryResolvers;
