import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type AuditLogActionType {
    id: ID!
    title: String
  }

  input AuditLogActionTypeFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    AuditLogActionType(id: ID!): AuditLogActionType
    allAuditLogActionTypes(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: AuditLogActionTypeFilter): [AuditLogActionType]
    _allAuditLogActionTypesMeta(page: Int, perPage: Int, filter: AuditLogActionTypeFilter): ListMetadata
  }

  type Mutation {
    createAuditLogActionType(id: ID!, title: String): AuditLogActionType
    updateAuditLogActionType(id: ID!, title: String): AuditLogActionType
    removeAuditLogActionType(id: ID!): AuditLogActionType
  }
`;
