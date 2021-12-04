import {
  QueryAllAutogenerationRulesArgs,
  Query_AllAutogenerationRulesMetaArgs,
  Resolvers,
  MutationCreateAutogenerationRuleArgs,
  MutationUpdateAutogenerationRuleArgs,
  MutationRemoveAutogenerationRuleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/context';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AutogenerationRule: (_, {id}, {context}: {context: Context}) =>
      context.autogenerationRules.get(id),
    allAutogenerationRules: (_, params: QueryAllAutogenerationRulesArgs, {context}: {context: Context}) =>
      context.autogenerationRules.all(params),
    _allAutogenerationRulesMeta: (_, params: Query_AllAutogenerationRulesMetaArgs, {context}: {context: Context}) =>
      context.autogenerationRules.meta(params),
  },
  Mutation: {
    createAutogenerationRule: (_, params: MutationCreateAutogenerationRuleArgs, {context}: {context: Context}) =>
      context.autogenerationRules.create(params, true),
    updateAutogenerationRule: (_, params: MutationUpdateAutogenerationRuleArgs, {context}: {context: Context}) =>
      context.autogenerationRules.update(params, true),
    removeAutogenerationRule: (_, params: MutationRemoveAutogenerationRuleArgs, {context}: {context: Context}) =>
      context.autogenerationRules.delete(params),
  },
};

export default queryResolvers;
