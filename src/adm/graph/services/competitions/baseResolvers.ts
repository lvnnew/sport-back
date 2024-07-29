import {
  QueryAllCompetitionsArgs,
  Query_AllCompetitionsMetaArgs,
  Resolvers,
  MutationCreateCompetitionArgs,
  MutationUpdateCompetitionArgs,
  MutationRemoveCompetitionArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    Competition: (_, {id}, {context}: {context: Context}) =>
      context.service('competitions').get(id, true),
    allCompetitions:
      (_, params: QueryAllCompetitionsArgs, {context}: {context: Context}) =>
        context.service('competitions').all(params, true),
    _allCompetitionsMeta:
      (_, params: Query_AllCompetitionsMetaArgs, {context}: {context: Context}) =>
        context.service('competitions').meta(params, true),
  },
  Mutation: {
    createCompetition:
      (_, params: MutationCreateCompetitionArgs, {context}: {context: Context}) =>
        context.service('competitions').create(params, true),
    updateCompetition:
      (_, params: MutationUpdateCompetitionArgs, {context}: {context: Context}) =>
        context.service('competitions').update(params, true),
    removeCompetition:
      (_, params: MutationRemoveCompetitionArgs, {context}: {context: Context}) =>
        context.service('competitions').delete(params, true),
  },
};

export default queryResolvers;
