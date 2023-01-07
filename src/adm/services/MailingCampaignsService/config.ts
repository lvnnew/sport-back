/* eslint-disable quote-props,comma-dangle,@typescript-eslint/ban-types */
import {ServiceConfig} from '../types';

// DO NOT EDIT! THIS IS GENERATED FILE

const config: ServiceConfig = {
  idType: 'int',
  autogeneratedStringId: false,
  auditable: true,
  withSearch: true,
  externalSearch: false,
  dateFields: [
    'date'
  ],
  otherFields: [
    'id',
    'title',
    'mailingTypeId',
    'priority',
    'mailingCampaignStatusId',
    'messageTemplateId'
  ],
  forbiddenForUserFields: [],
  entityTypeId: 'mailingCampaign',
};

export default config;
