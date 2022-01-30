import {
  QueryAllAutogenerationHistoryEntriesArgs,
  Query_AllAutogenerationHistoryEntriesMetaArgs,
  Resolvers,
  MutationCreateAutogenerationHistoryEntryArgs,
  MutationUpdateAutogenerationHistoryEntryArgs,
  MutationRemoveAutogenerationHistoryEntryArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AutogenerationHistoryEntry: (_, {id}, {context}: {context: Context}) =>
      context.service('autogenerationHistoryEntries').get(id),
    allAutogenerationHistoryEntries: (_, params: QueryAllAutogenerationHistoryEntriesArgs, {context}: {context: Context}) =>
      context.service('autogenerationHistoryEntries').all(params),
    _allAutogenerationHistoryEntriesMeta: (_, params: Query_AllAutogenerationHistoryEntriesMetaArgs, {context}: {context: Context}) =>
      context.service('autogenerationHistoryEntries').meta(params),
  },
  Mutation: {
    createAutogenerationHistoryEntry: (_, params: MutationCreateAutogenerationHistoryEntryArgs, {context}: {context: Context}) =>
      context.service('autogenerationHistoryEntries').create(params, true),
    updateAutogenerationHistoryEntry: (_, params: MutationUpdateAutogenerationHistoryEntryArgs, {context}: {context: Context}) =>
      context.service('autogenerationHistoryEntries').update(params, true),
    removeAutogenerationHistoryEntry: (_, params: MutationRemoveAutogenerationHistoryEntryArgs, {context}: {context: Context}) =>
      context.service('autogenerationHistoryEntries').delete(params),
  },
};

export default queryResolvers;
