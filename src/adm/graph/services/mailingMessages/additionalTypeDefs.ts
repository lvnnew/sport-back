import {gql} from 'apollo-server';

export default gql`
  type QuantityPerStatus {
    draft: Int!
    stopped: Int!
    pending: Int!
    sent: Int!
    cancelled: Int!
    errored: Int!
  }

  type Query {
    getMessageQuantityPerStatus(mailingCampaignId: Int!): QuantityPerStatus!
  }
`;

