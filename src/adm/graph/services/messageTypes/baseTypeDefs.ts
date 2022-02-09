import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MessageType {
    id: ID!
    title: String!
    description: String
  }

  input MessageTypeFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    description: String
    description_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MessageType(id: ID!): MessageType
    allMessageTypes(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MessageTypeFilter): [MessageType]
    _allMessageTypesMeta(page: Int, perPage: Int, filter: MessageTypeFilter): ListMetadata
  }

  type Mutation {
    createMessageType(id: ID!, title: String!, description: String): MessageType
    updateMessageType(id: ID!, title: String!, description: String): MessageType
    removeMessageType(id: ID!): MessageType
  }
`;
