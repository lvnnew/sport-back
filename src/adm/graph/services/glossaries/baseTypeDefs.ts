import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Glossary {
    id: Int!
    title: String!
    description: String!
    periodTypeId: String!
  }

  input GlossaryFilter {
    q: String
    ids: [Int]
    id: Int
    title: String
    title_in: [String]
    title_not_in: [String]
    description: String
    description_in: [String]
    description_not_in: [String]
    periodTypeId: String
    periodTypeId_in: [String]
    periodTypeId_not_in: [String]
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Glossary(id: Int!): Glossary
    allGlossaries(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: GlossaryFilter): [Glossary]
    _allGlossariesMeta(page: Int, perPage: Int, filter: GlossaryFilter): ListMetadata
  }

  type Mutation {
    createGlossary(title: String!, description: String!, periodTypeId: String!): Glossary
    updateGlossary(id: Int!, title: String!, description: String!, periodTypeId: String!): Glossary
    removeGlossary(id: Int!): Glossary
  }
`;
