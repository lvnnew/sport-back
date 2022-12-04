import {gql} from 'apollo-server';

export default gql`
  type PermissionsWithMeta {
    permissionId: String!
    byRoles: [String!]!
    directly: Boolean!
    byFullAccessRoles: [String!]!
  }

  type Query {
    getPermissions: [String!]!
    getPermissionsWithMeta: [PermissionsWithMeta!]!
    getPermissionsOfManagerWithMeta(managerId: Int!): [PermissionsWithMeta!]!
    getRoles: [String!]!
    getRolesOfManager(managerId: Int!): [String!]!
  }

  type Mutation {
    changePassword(password: String!): Void
  }
`;
