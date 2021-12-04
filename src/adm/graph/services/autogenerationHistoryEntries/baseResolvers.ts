import {
  QueryAllAutogenerationHistoryEntriesArgs,
  Query_AllAutogenerationHistoryEntriesMetaArgs,
  Resolvers,
  MutationCreateAutogenerationHistoryEntryArgs,
  MutationUpdateAutogenerationHistoryEntryArgs,
  MutationRemoveAutogenerationHistoryEntryArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AutogenerationHistoryEntry: (_, {id}, {context}: {context: Context}) =>
      context.autogenerationHistoryEntries.get(id),
    allAutogenerationHistoryEntries: (_, params: QueryAllAutogenerationHistoryEntriesArgs, {context}: {context: Context}) =>
      context.autogenerationHistoryEntries.all(params),
    _allAutogenerationHistoryEntriesMeta: (_, params: Query_AllAutogenerationHistoryEntriesMetaArgs, {context}: {context: Context}) =>
      context.autogenerationHistoryEntries.meta(params),
  },
  Mutation: {
    createAutogenerationHistoryEntry: (_, params: MutationCreateAutogenerationHistoryEntryArgs, {context}: {context: Context}) =>
      context.autogenerationHistoryEntries.create(params, true),
    updateAutogenerationHistoryEntry: (_, params: MutationUpdateAutogenerationHistoryEntryArgs, {context}: {context: Context}) =>
      context.autogenerationHistoryEntries.update(params, true),
    removeAutogenerationHistoryEntry: (_, params: MutationRemoveAutogenerationHistoryEntryArgs, {context}: {context: Context}) =>
      context.autogenerationHistoryEntries.delete(params),
  },
};

export default queryResolvers;
