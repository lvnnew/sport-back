import {
  QueryAllConfigurationVariablesArgs,
  Query_AllConfigurationVariablesMetaArgs,
  Resolvers,
  MutationCreateConfigurationVariableArgs,
  MutationUpdateConfigurationVariableArgs,
  MutationRemoveConfigurationVariableArgs,
} from '../../../../generated/graphql';
import {Context} from '../../../services/types';

// DO NOT EDIT! THIS IS GENERATED FILE

const queryResolvers: Resolvers = {
  Query: {
    ConfigurationVariable: (_, {id}, {context}: {context: Context}) =>
      context.service('configurationVariables').get(id),
    allConfigurationVariables: (_, params: QueryAllConfigurationVariablesArgs, {context}: {context: Context}) =>
      context.service('configurationVariables').all(params),
    _allConfigurationVariablesMeta: (_, params: Query_AllConfigurationVariablesMetaArgs, {context}: {context: Context}) =>
      context.service('configurationVariables').meta(params),
  },
  Mutation: {
    createConfigurationVariable: (_, params: MutationCreateConfigurationVariableArgs, {context}: {context: Context}) =>
      context.service('configurationVariables').create(params, true),
    updateConfigurationVariable: (_, params: MutationUpdateConfigurationVariableArgs, {context}: {context: Context}) =>
      context.service('configurationVariables').update(params, true),
    removeConfigurationVariable: (_, params: MutationRemoveConfigurationVariableArgs, {context}: {context: Context}) =>
      context.service('configurationVariables').delete(params),
  },
};

export default queryResolvers;
