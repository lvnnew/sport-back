/* eslint-disable max-len */
import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MessageTemplateLangVariant {
    id: Int!
    title: String
    subjectTemplate: String!
    bodyTemplate: String!
    messageTemplateId: String!
    languageId: String!
    additionalStyle: String
  }

  input MessageTemplateLangVariantFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    title_defined: Boolean
    subjectTemplate: String
    subjectTemplate_in: [String]
    subjectTemplate_not_in: [String]
    bodyTemplate: String
    bodyTemplate_in: [String]
    bodyTemplate_not_in: [String]
    messageTemplateId: String
    messageTemplateId_in: [String]
    messageTemplateId_not_in: [String]
    languageId: String
    languageId_in: [String]
    languageId_not_in: [String]
    additionalStyle: String
    additionalStyle_in: [String]
    additionalStyle_not_in: [String]
    additionalStyle_defined: Boolean
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
    createMessageTemplateLangVariant(title: String, subjectTemplate: String!, bodyTemplate: String!, messageTemplateId: String!, languageId: String!, additionalStyle: String): MessageTemplateLangVariant
    updateMessageTemplateLangVariant(id: Int!, title: String, subjectTemplate: String!, bodyTemplate: String!, messageTemplateId: String!, languageId: String!, additionalStyle: String): MessageTemplateLangVariant
    removeMessageTemplateLangVariant(id: Int!): MessageTemplateLangVariant
  }
`;
