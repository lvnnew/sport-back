import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type Role {
  id: ID!
  title: String
  hasFullAccess: Boolean
}

input RoleFilter {
  q: String
  ids: [ID]
  id: ID
  title: String
  title_in: [String]
  hasFullAccess: Boolean
}

type ListMetadata {
  count: Int
}

type Query {
  Role(id: ID!): Role
  allRoles(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: RoleFilter): [Role]
  _allRolesMeta(page: Int, perPage: Int, filter: RoleFilter): ListMetadata
}

type Mutation {
  createRole(id: ID!, title: String, hasFullAccess: Boolean): Role
  updateRole(id: ID!, title: String, hasFullAccess: Boolean): Role
  removeRole(id: ID!): Boolean
}
`;
