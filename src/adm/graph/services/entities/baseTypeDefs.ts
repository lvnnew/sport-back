import {gql} from 'apollo-server';

// DO NOT EDIT! THIS IS GENERATED FILE

export default gql`
  type Entity {
    id: ID!
    title: String
  }

  input EntityFilter {
    q: String
    ids: [ID]
    id: ID
    title: String
    title_in: [String]
    title_not_in: [String]
    title_defined: Boolean
  }

  type ListMetadata {
    count: Int
  }

  type Query {
    Entity(id: ID!): Entity
    allEntities(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: EntityFilter): [Entity]
    _allEntitiesMeta(page: Int, perPage: Int, filter: EntityFilter): ListMetadata
  }

  type Mutation {
    createEntity(id: ID!, title: String): Entity
    updateEntity(id: ID!, title: String): Entity
    removeEntity(id: ID!): Entity
  }
`;
