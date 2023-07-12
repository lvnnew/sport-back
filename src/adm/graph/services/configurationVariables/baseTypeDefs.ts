/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ConfigurationVariable {
    id: ID!
    value: JSON!
  }

  """
  The 'JSON' scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
  """
  scalar JSON @specifiedBy(url: "http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf")

  input ConfigurationVariableFilter {
    ids: [ID]
    id: ID
    value: JSON
    value_in: [JSON]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    ConfigurationVariable(id: ID!): ConfigurationVariable
    allConfigurationVariables(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ConfigurationVariableFilter): [ConfigurationVariable]
    _allConfigurationVariablesMeta(page: Int, perPage: Int, filter: ConfigurationVariableFilter): ListMetadata
  }

  type Mutation {
    createConfigurationVariable(id: ID!, value: JSON!): ConfigurationVariable
    updateConfigurationVariable(id: ID!, value: JSON!): ConfigurationVariable
    removeConfigurationVariable(id: ID!): ConfigurationVariable
  }
`;
