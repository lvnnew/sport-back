import {
  QueryAllAutogenerationRulesArgs,
  Query_AllAutogenerationRulesMetaArgs,
  Resolvers,
  MutationCreateAutogenerationRuleArgs,
  MutationUpdateAutogenerationRuleArgs,
  MutationRemoveAutogenerationRuleArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    AutogenerationRule: (_, {id}, {context}: {context: Context}) =>
      context.service('autogenerationRules').get(id, true),
    allAutogenerationRules:
      (_, params: QueryAllAutogenerationRulesArgs, {context}: {context: Context}) =>
        context.service('autogenerationRules').all(params, true),
    _allAutogenerationRulesMeta:
      (_, params: Query_AllAutogenerationRulesMetaArgs, {context}: {context: Context}) =>
        context.service('autogenerationRules').meta(params, true),
  },
  Mutation: {
    createAutogenerationRule:
      (_, params: MutationCreateAutogenerationRuleArgs, {context}: {context: Context}) =>
        context.service('autogenerationRules').create(params, true),
    updateAutogenerationRule:
      (_, params: MutationUpdateAutogenerationRuleArgs, {context}: {context: Context}) =>
        context.service('autogenerationRules').update(params, true),
    removeAutogenerationRule:
      (_, params: MutationRemoveAutogenerationRuleArgs, {context}: {context: Context}) =>
        context.service('autogenerationRules').delete(params, true),
  },
};

export default queryResolvers;
