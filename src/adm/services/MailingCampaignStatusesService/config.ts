/* eslint-disable quote-props,comma-dangle,@typescript-eslint/ban-types */
import Entity from '../../../types/Entity';
import {ServiceConfig} from '../types';

// DO NOT EDIT! THIS IS GENERATED FILE

const config: ServiceConfig = {
  idType: 'string',
  autogeneratedStringId: false,
  auditable: true,
  withSearch: true,
  externalSearch: false,
  dateFields: [],
  otherFields: [
    'id',
    'title'
  ],
  forbiddenForUserFields: [],
  entityTypeId: Entity.MailingCampaignStatus,
};

export default config;
