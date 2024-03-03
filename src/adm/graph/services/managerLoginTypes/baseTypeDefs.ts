import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type ManagerLoginType {
    id: ID!
    title: String
  }

  input ManagerLoginTypeFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
    title_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    ManagerLoginType(id: ID!): ManagerLoginType
    allManagerLoginTypes(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ManagerLoginTypeFilter): [ManagerLoginType]
    _allManagerLoginTypesMeta(page: Int, perPage: Int, filter: ManagerLoginTypeFilter): ListMetadata
  }

  type Mutation {
    createManagerLoginType(id: ID!, title: String): ManagerLoginType
    updateManagerLoginType(id: ID!, title: String): ManagerLoginType
    removeManagerLoginType(id: ID!): ManagerLoginType
  }
`;
