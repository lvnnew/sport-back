import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MessageTemplate {
    id: Int!
    title: String!
    secretData: Boolean!
    messageTypeId: String!
    templateStyleId: Int
  }

  input MessageTemplateFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    secretData: Boolean
    messageTypeId: String
    messageTypeId_in: [String]
    templateStyleId: Int
    templateStyleId_in: [Int]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MessageTemplate(id: Int!): MessageTemplate
    allMessageTemplates(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MessageTemplateFilter): [MessageTemplate]
    _allMessageTemplatesMeta(page: Int, perPage: Int, filter: MessageTemplateFilter): ListMetadata
  }

  type Mutation {
    createMessageTemplate(title: String!, secretData: Boolean!, messageTypeId: String!, templateStyleId: Int): MessageTemplate
    updateMessageTemplate(id: Int!, title: String!, secretData: Boolean!, messageTypeId: String!, templateStyleId: Int): MessageTemplate
    removeMessageTemplate(id: Int!): MessageTemplate
  }
`;
