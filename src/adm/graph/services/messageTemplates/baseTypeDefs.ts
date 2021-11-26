import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
type MessageTemplate {
  id: ID!
  title: String!
  secretData: Boolean!
}

input MessageTemplateFilter {
  q: String
  ids: [ID]
  id: ID
  title: String
  title_in: [String]
  secretData: Boolean
}

type ListMetadata {
  count: Int
}

type Query {
  MessageTemplate(id: ID!): MessageTemplate
  allMessageTemplates(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MessageTemplateFilter): [MessageTemplate]
  _allMessageTemplatesMeta(page: Int, perPage: Int, filter: MessageTemplateFilter): ListMetadata
}

type Mutation {
  createMessageTemplate(id: ID!, title: String!, secretData: Boolean!): MessageTemplate
  updateMessageTemplate(id: ID!, title: String!, secretData: Boolean!): MessageTemplate
  removeMessageTemplate(id: ID!): Boolean
}
`;
