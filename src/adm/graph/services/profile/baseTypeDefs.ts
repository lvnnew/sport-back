import {gql} from 'apollo-server';

export default gql`
  type PermissionsWithMeta {
    permissionId: String!
    byRoles: [String]!
    directly: Boolean!
  }

  type Query {
    getManagerPermissions: [String!]!
    getPermissionsWithMeta: [PermissionsWithMeta]!
    getPermissionsOfManagerWithMeta(managerId: Int!): [PermissionsWithMeta]!
  }
`;
