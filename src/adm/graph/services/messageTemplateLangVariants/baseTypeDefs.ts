import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MessageTemplateLangVariant {
    id: Int!
    title: String
    subjectTemplate: String!
    bodyTemplate: String!
    messageTemplateId: Int!
    languageId: String!
    additionalStyle: String
  }

  input MessageTemplateLangVariantFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    subjectTemplate: String
    subjectTemplate_in: [String]
    bodyTemplate: String
    bodyTemplate_in: [String]
    messageTemplateId: Int
    messageTemplateId_in: [Int]
    languageId: String
    languageId_in: [String]
    additionalStyle: String
    additionalStyle_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MessageTemplateLangVariant(id: Int!): MessageTemplateLangVariant
    allMessageTemplateLangVariants(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MessageTemplateLangVariantFilter): [MessageTemplateLangVariant]
    _allMessageTemplateLangVariantsMeta(page: Int, perPage: Int, filter: MessageTemplateLangVariantFilter): ListMetadata
  }

  type Mutation {
    createMessageTemplateLangVariant(title: String, subjectTemplate: String!, bodyTemplate: String!, messageTemplateId: Int!, languageId: String!, additionalStyle: String): MessageTemplateLangVariant
    updateMessageTemplateLangVariant(id: Int!, title: String, subjectTemplate: String!, bodyTemplate: String!, messageTemplateId: Int!, languageId: String!, additionalStyle: String): MessageTemplateLangVariant
    removeMessageTemplateLangVariant(id: Int!): MessageTemplateLangVariant
  }
`;
