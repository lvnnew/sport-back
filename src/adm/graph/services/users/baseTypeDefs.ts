import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type User {
    id: Int!
    title: String
    lastname: String!
    firstname: String!
    email: String!
    tenantId: Int
  }

  input UserFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    title_defined: Boolean
    lastname: String
    lastname_in: [String]
    lastname_not_in: [String]
    firstname: String
    firstname_in: [String]
    firstname_not_in: [String]
    email: String
    email_in: [String]
    email_not_in: [String]
    tenantId: Int
    tenantId_in: [Int]
    tenantId_not_in: [Int]
    tenantId_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    User(id: Int!): User
    allUsers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: UserFilter): [User]
    _allUsersMeta(page: Int, perPage: Int, filter: UserFilter): ListMetadata
  }

  type Mutation {
    createUser(title: String, lastname: String!, firstname: String!, email: String!, tenantId: Int): User
    updateUser(id: Int!, title: String, lastname: String!, firstname: String!, email: String!, tenantId: Int): User
    removeUser(id: Int!): User
  }
`;
