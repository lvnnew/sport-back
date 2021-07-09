import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type Manager {
  id: Int!
  lastName: String!
  firstName: String!
  title: String
}

input ManagerFilter {
  q: String
  ids: [Int]
  id: Int
  lastName: String
  lastName_in: [String]
  firstName: String
  firstName_in: [String]
  title: String
  title_in: [String]
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
  createManager(lastName: String!, firstName: String!, title: String): Manager
  updateManager(id: Int!, lastName: String!, firstName: String!, title: String): Manager
  removeManager(id: Int!): Boolean
}

`;
