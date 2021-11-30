import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type User {
    id: Int!
    title: String
    lastname: String!
    firstname: String!
    email: String!
  }

  input UserFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    lastname: String
    lastname_in: [String]
    firstname: String
    firstname_in: [String]
    email: String
    email_in: [String]
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
    createUser(title: String, lastname: String!, firstname: String!, email: String!): User
    updateUser(id: Int!, title: String, lastname: String!, firstname: String!, email: String!): User
    removeUser(id: Int!): User
  }
`;
