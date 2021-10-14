import {gql} from 'apollo-server';

export default gql`
type PermissionsWithMeta {
  permissionId: String!
  byRoles: [String]!
  directly: Boolean!
}

type Query {
  getPermissions: [String!]!
  getPermissionsWithMeta: [PermissionsWithMeta]!
  getPermissionsOfManagerWithMeta(managerId: Int!): [PermissionsWithMeta]!
}
`;
