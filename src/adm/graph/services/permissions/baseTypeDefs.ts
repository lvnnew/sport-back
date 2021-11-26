import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type Permission {
  id: ID!
  title: String
}

input PermissionFilter {
  q: String
  ids: [ID]
  id: ID
  title: String
  title_in: [String]
}

type ListMetadata {
  count: Int
}

type Query {
  Permission(id: ID!): Permission
  allPermissions(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: PermissionFilter): [Permission]
  _allPermissionsMeta(page: Int, perPage: Int, filter: PermissionFilter): ListMetadata
}

type Mutation {
  createPermission(id: ID!, title: String): Permission
  updatePermission(id: ID!, title: String): Permission
  removePermission(id: ID!): Boolean
}
`;
