import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type Manager {
  id: Int!
  title: String
  lastName: String!
  firstName: String!
  email: String
}

input ManagerFilter {
  q: String
  ids: [Int]
  id: Int
  title: String
  title_in: [String]
  lastName: String
  lastName_in: [String]
  firstName: String
  firstName_in: [String]
  email: String
  email_in: [String]
}

type ListMetadata {
  count: Int
}

type Query {
  Manager(id: Int!): Manager
  allManagers(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: ManagerFilter): [Manager]
  _allManagersMeta(page: Int, perPage: Int, filter: ManagerFilter): ListMetadata
}

type Mutation {
  createManager(title: String, lastName: String!, firstName: String!, email: String): Manager
  updateManager(id: Int!, title: String, lastName: String!, firstName: String!, email: String): Manager
  removeManager(id: Int!): Boolean
}

`;
