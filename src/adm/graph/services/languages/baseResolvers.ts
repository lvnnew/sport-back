import {
  QueryAllLanguagesArgs,
  Query_AllLanguagesMetaArgs,
  Resolvers,
  MutationCreateLanguageArgs,
  MutationUpdateLanguageArgs,
  MutationRemoveLanguageArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Language: (_, {id}, {context}: {context: Context}) =>
      context.service('languages').get(id, true),
    allLanguages:
      (_, params: QueryAllLanguagesArgs, {context}: {context: Context}) =>
        context.service('languages').all(params, true),
    _allLanguagesMeta:
      (_, params: Query_AllLanguagesMetaArgs, {context}: {context: Context}) =>
        context.service('languages').meta(params, true),
  },
  Mutation: {
    createLanguage:
      (_, params: MutationCreateLanguageArgs, {context}: {context: Context}) =>
        context.service('languages').create(params, true),
    updateLanguage:
      (_, params: MutationUpdateLanguageArgs, {context}: {context: Context}) =>
        context.service('languages').update(params, true),
    removeLanguage:
      (_, params: MutationRemoveLanguageArgs, {context}: {context: Context}) =>
        context.service('languages').delete(params, true),
  },
};

export default queryResolvers;
