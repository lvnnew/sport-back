import {
  QueryAllGlossariesArgs,
  Query_AllGlossariesMetaArgs,
  Resolvers,
  MutationCreateGlossaryArgs,
  MutationUpdateGlossaryArgs,
  MutationRemoveGlossaryArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Glossary: (_, {id}, {context}: {context: Context}) =>
      context.service('glossaries').get(id, true),
    allGlossaries:
      (_, params: QueryAllGlossariesArgs, {context}: {context: Context}) =>
        context.service('glossaries').all(params, true),
    _allGlossariesMeta:
      (_, params: Query_AllGlossariesMetaArgs, {context}: {context: Context}) =>
        context.service('glossaries').meta(params, true),
  },
  Mutation: {
    createGlossary:
      (_, params: MutationCreateGlossaryArgs, {context}: {context: Context}) =>
        context.service('glossaries').create(params, true),
    updateGlossary:
      (_, params: MutationUpdateGlossaryArgs, {context}: {context: Context}) =>
        context.service('glossaries').update(params, true),
    removeGlossary:
      (_, params: MutationRemoveGlossaryArgs, {context}: {context: Context}) =>
        context.service('glossaries').delete(params, true),
  },
};

export default queryResolvers;
