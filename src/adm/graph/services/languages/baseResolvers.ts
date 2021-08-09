import {
  QueryAllLanguagesArgs,
  Query_AllLanguagesMetaArgs,
  Resolvers,
  MutationCreateLanguageArgs,
  MutationUpdateLanguageArgs,
  MutationRemoveLanguageArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Language: (_, {id}, {context}: {context: Context}) =>
      context.languages.get(id),
    allLanguages: (_, params: QueryAllLanguagesArgs, {context}: {context: Context}) =>
      context.languages.all(params),
    _allLanguagesMeta: (_, params: Query_AllLanguagesMetaArgs, {context}: {context: Context}) =>
      context.languages.meta(params),
  },
  Mutation: {
    createLanguage: (_, params: MutationCreateLanguageArgs, {context}: {context: Context}) =>
      context.languages.create(params),
    updateLanguage: (_, params: MutationUpdateLanguageArgs, {context}: {context: Context}) =>
      context.languages.update(params),
    removeLanguage: (_, params: MutationRemoveLanguageArgs, {context}: {context: Context}) =>
      context.languages.delete(params),
  },
};

export default queryResolvers;
