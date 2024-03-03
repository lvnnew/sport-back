import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type MailingType {
    id: ID!
    title: String!
  }

  input MailingTypeFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    MailingType(id: ID!): MailingType
    allMailingTypes(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: MailingTypeFilter): [MailingType]
    _allMailingTypesMeta(page: Int, perPage: Int, filter: MailingTypeFilter): ListMetadata
  }

  type Mutation {
    createMailingType(id: ID!, title: String!): MailingType
    updateMailingType(id: ID!, title: String!): MailingType
    removeMailingType(id: ID!): MailingType
  }
`;
